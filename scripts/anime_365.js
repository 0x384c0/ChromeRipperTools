log("Started")
setFileName("download.sh")

let catalogUrl = "^https://smotret-anime-365.ru/catalog/"
let promoEmbedUrl = "^https://anime-365.ru/promo/embed"
let videoEmbedUrl = "^https://smotret-anime-365.ru/translations/embed"
let videoEmbedSel = "iframe[src^='https://smotret-anime-365.ru/translations/embed']"
let nexEpSel = "i[class='material-icons right']"
let skipAdSel = "Пропустить рекламу(?! \\()"
let playSel = "div[class='vjs-play-control vjs-control ']"
let skipSel = "div.skip-button"
var hasNextEpisode = false


do {
    var isNeedWaitRequest = true
    sleep(5000) //TODO: use wait page loaded 
    let hasNoPromo = executeScript({ code: 'document.querySelector("video").getAttribute("src") != null', hrefRegex: videoEmbedUrl })
    let hasLongPromo = exists({ selector: "iframe", innerTextRegex: null, hrefRegex: videoEmbedUrl })
    let hasPromo = exists({ selector: playSel, innerTextRegex: null, hrefRegex: videoEmbedUrl })
    if (hasNoPromo) {
        log("Has No Promo.")
        isNeedWaitRequest = false
    } else if (hasLongPromo) {
        log("Has Long Promo. Skipping it")
        click({ selector: playSel, isTrusted: true, iframesSelectorInfo: [{ hrefRegex: catalogUrl, selector: videoEmbedSel }], hrefRegex: videoEmbedUrl })
        sleep(1000)
        wait({ selector: skipSel, innerTextRegex: skipAdSel, waitTimout: 25000, hrefRegex: promoEmbedUrl })
        executeScript({ code: "this.doSkip()", hrefRegex: promoEmbedUrl })
    } else if (hasPromo) {
        log("Has Short Promo. Skipping it")
        click({ selector: playSel, isTrusted: true, iframesSelectorInfo: [{ hrefRegex: catalogUrl, selector: videoEmbedSel }], hrefRegex: videoEmbedUrl })
    } else {//TODO: add case when only youtube frame
        throw "Invalid state"
    }

    if (isNeedWaitRequest) {
        //wait url
        let body = waitRequest({ urlRegex: "/translations/embedActivation", waitTimout: 25000 })
        sleep(500)
    }
    //play video
    if (hasNoPromo) {
        log("Playing video with play button")
        click({ selector: playSel, isTrusted: true, iframesSelectorInfo: [{ hrefRegex: catalogUrl, selector: videoEmbedSel }], hrefRegex: videoEmbedUrl })
    } else if (hasLongPromo || hasPromo) {
        log("Playing video with skip button")
        click({ selector: skipSel, isTrusted: true, innerTextRegex: skipAdSel, waitTimout: 25000, iframesSelectorInfo: [{ hrefRegex: catalogUrl, selector: videoEmbedSel }], hrefRegex: videoEmbedUrl })
    } else {
        throw "Invalid state"
    }
    sleep(500)

    //grab data
    let dataTitle = executeScript({ code: 'document.querySelector("video").getAttribute("data-title")', hrefRegex: videoEmbedUrl })
    let dataSrc = executeScript({ code: 'document.querySelector("video").getAttribute("src")', hrefRegex: videoEmbedUrl })
    let dataSubtitles = executeScript({ code: 'document.querySelector("video").getAttribute("data-subtitles")', hrefRegex: videoEmbedUrl })

    wget(dataSrc, dataTitle + ".mp4")
    wget(dataSubtitles, dataTitle + ".ass")


    //go to next episode
    hasNextEpisode = exists({ selector: nexEpSel, innerTextRegex: null, hrefRegex: catalogUrl })
    if (hasNextEpisode) {
        log("Going to next episode")
        click({ selector: nexEpSel, isTrusted: true, hrefRegex: catalogUrl })
    }
} while (hasNextEpisode);

log("Finished");