const axios = require("axios")
const cheerio = require('cheerio');

const $ = cheerio.load(`<div class="s-main-slot s-result-list s-search-results sg-row">




<div data-asin="B0C46FN82F" data-index="5" data-uuid="a7b85418-f7d1-4528-ab93-483c7d686d57"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_4" data-component-id="19">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-5"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_28"
        data-csa-c-pos="28" data-csa-c-item-id="amzn1.asin.1.B0C46FN82F" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="izhra2-4ohbl4-e61eq-zi6g2d" data-cel-widget="MAIN-SEARCH_RESULTS-5">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/Redmi-Storage-Powerful-Processor-Warranty/dp/B0C46FN82F/ref=sr_1_28?qid=1689790964&amp;s=electronics&amp;sr=1-28">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/81RR0TAz+5L._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/81RR0TAz+5L._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/81RR0TAz+5L._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/81RR0TAz+5L._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/81RR0TAz+5L._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/81RR0TAz+5L._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="Redmi A2 (Aqua Blue, 2GB RAM, 32GB Storage) | Powerful Octa Core G36 Processor | Upto 7GB RAM | Large 16.5 cm HD+ Display ..."
                                    data-image-index="28" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Redmi-Storage-Powerful-Processor-Warranty/dp/B0C46FN82F/ref=sr_1_28?qid=1689790964&amp;s=electronics&amp;sr=1-28"><span
                                    class="a-size-base-plus a-color-base a-text-normal">Redmi A2 (Aqua Blue, 2GB
                                    RAM, 32GB Storage) | Powerful Octa Core G36 Processor | Upto 7GB RAM | Large
                                    16.5 cm HD+ Display with Massive 5000mAh Battery | 2 Years Warranty [Limited
                                    time Offer]</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="3.8 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0C46FN82F&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="gfib09-2upl8k-6z9rby-k1eed1"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span
                                                class="a-icon-alt">3.8 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="1,225"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/Redmi-Storage-Powerful-Processor-Warranty/dp/B0C46FN82F/ref=sr_1_28?qid=1689790964&amp;s=electronics&amp;sr=1-28#customerReviews"><span
                                        class="a-size-base s-underline-text">1,225</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Redmi-Storage-Powerful-Processor-Warranty/dp/B0C46FN82F/ref=sr_1_28?qid=1689790964&amp;s=electronics&amp;sr=1-28"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹6,299</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">6,299</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹8,999</span><span
                                            aria-hidden="true">₹8,999</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(30% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="20"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Save extra with No Cost
                                            EMI</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Save extra with No Cost
                                            EMI</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B0BDK62PDX" data-index="6" data-uuid="4cd4fc7c-5849-4285-b6ba-327d49729d08"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_5" data-component-id="21">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-6"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_29"
        data-csa-c-pos="29" data-csa-c-item-id="amzn1.asin.1.B0BDK62PDX" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="dddxrs-6p8386-xpjscp-jqu1yb" data-cel-widget="MAIN-SEARCH_RESULTS-6">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/Apple-iPhone-14-128GB-Blue/dp/B0BDK62PDX/ref=sr_1_29?qid=1689790964&amp;s=electronics&amp;sr=1-29">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="Apple iPhone 14 (128 GB) - Blue" data-image-index="29" data-image-load=""
                                    data-image-latency="s-product-image" data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Apple-iPhone-14-128GB-Blue/dp/B0BDK62PDX/ref=sr_1_29?qid=1689790964&amp;s=electronics&amp;sr=1-29"><span
                                    class="a-size-base-plus a-color-base a-text-normal">Apple iPhone 14 (128 GB) -
                                    Blue</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="4.5 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0BDK62PDX&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="rw4eta-udtpsu-crh3s9-cz32ds"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4-5 aok-align-bottom"><span
                                                class="a-icon-alt">4.5 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="1,865"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/Apple-iPhone-14-128GB-Blue/dp/B0BDK62PDX/ref=sr_1_29?qid=1689790964&amp;s=electronics&amp;sr=1-29#customerReviews"><span
                                        class="a-size-base s-underline-text">1,865</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                href="/gp/goldbox/"><span id="BEST_DEAL_B0BDK62PDX" class="a-badge"
                                    data-a-badge-type="deal"><span id="BEST_DEAL_B0BDK62PDX-label"
                                        class="a-badge-label" data-a-badge-color="sx-lightning-deal-red"><span
                                            class="a-badge-label-inner a-text-ellipsis"><span class="a-badge-text"
                                                data-a-badge-color="sx-cloud">Limited time
                                                deal</span></span></span></span> </a> </div>
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Apple-iPhone-14-128GB-Blue/dp/B0BDK62PDX/ref=sr_1_29?qid=1689790964&amp;s=electronics&amp;sr=1-29"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹66,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">66,999</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹79,990</span><span
                                            aria-hidden="true">₹79,990</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(16% off)</span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


<div data-asin="B0C7V84BS2" data-index="7" data-uuid="6692eb80-d14f-429f-ae44-33f9eefec2cc"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_6" data-component-id="22">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-7"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_30"
        data-csa-c-pos="30" data-csa-c-item-id="amzn1.asin.1.B0C7V84BS2" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="ulnmc9-axrp9n-zbetlb-yc332x" data-cel-widget="MAIN-SEARCH_RESULTS-7">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/OnePlus-Nord-Tempest-128GB-Storage/dp/B0C7V84BS2/ref=sr_1_30?qid=1689790964&amp;s=electronics&amp;sr=1-30">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/71RtIeN2J4L._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/71RtIeN2J4L._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/71RtIeN2J4L._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/71RtIeN2J4L._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/71RtIeN2J4L._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/71RtIeN2J4L._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="OnePlus Nord 3 5G (Tempest Gray, 8GB RAM, 128GB Storage)"
                                    data-image-index="30" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/OnePlus-Nord-Tempest-128GB-Storage/dp/B0C7V84BS2/ref=sr_1_30?qid=1689790964&amp;s=electronics&amp;sr=1-30"><span
                                    class="a-size-base-plus a-color-base a-text-normal">OnePlus Nord 3 5G (Tempest
                                    Gray, 8GB RAM, 128GB Storage)</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/OnePlus-Nord-Tempest-128GB-Storage/dp/B0C7V84BS2/ref=sr_1_30?qid=1689790964&amp;s=electronics&amp;sr=1-30"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹33,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">33,999</span></span></span> </a> </div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="23"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Save extra with No Cost
                                            EMI</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Save extra with No Cost
                                            EMI</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


<div data-asin="B08VB57558" data-index="9" data-uuid="4dc515d3-e09e-494b-88d9-5145c70d3476"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_7" data-component-id="24">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-9"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_31"
        data-csa-c-pos="31" data-csa-c-item-id="amzn1.asin.1.B08VB57558" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="e6ezkj-9fblgu-kyj20c-yo0xda" data-cel-widget="MAIN-SEARCH_RESULTS-9">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/Samsung-Galaxy-Cloud-128GB-Storage/dp/B08VB57558/ref=sr_1_31?qid=1689790964&amp;s=electronics&amp;sr=1-31">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI &amp; Additional Exchange Offers"
                                    data-image-index="31" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Samsung-Galaxy-Cloud-128GB-Storage/dp/B08VB57558/ref=sr_1_31?qid=1689790964&amp;s=electronics&amp;sr=1-31"><span
                                    class="a-size-base-plus a-color-base a-text-normal">Samsung Galaxy S20 FE 5G
                                    (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI &amp; Additional Exchange
                                    Offers</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="4.2 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B08VB57558&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="ect2qg-qbbh99-ov27s8-cq45ie"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span
                                                class="a-icon-alt">4.2 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="32,056"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/Samsung-Galaxy-Cloud-128GB-Storage/dp/B08VB57558/ref=sr_1_31?qid=1689790964&amp;s=electronics&amp;sr=1-31#customerReviews"><span
                                        class="a-size-base s-underline-text">32,056</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                href="/gp/goldbox/"><span id="BEST_DEAL_B08VB57558" class="a-badge"
                                    data-a-badge-type="deal"><span id="BEST_DEAL_B08VB57558-label"
                                        class="a-badge-label" data-a-badge-color="sx-lightning-deal-red"><span
                                            class="a-badge-label-inner a-text-ellipsis"><span class="a-badge-text"
                                                data-a-badge-color="sx-cloud">Limited time
                                                deal</span></span></span></span> </a> </div>
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Samsung-Galaxy-Cloud-128GB-Storage/dp/B08VB57558/ref=sr_1_31?qid=1689790964&amp;s=electronics&amp;sr=1-31"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹34,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">34,999</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹74,999</span><span
                                            aria-hidden="true">₹74,999</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(53% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="25"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Save extra with No Cost
                                            EMI</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Save extra with No Cost
                                            EMI</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


<div data-asin="B0BBM7L888" data-index="10" data-uuid="36890a30-eb59-4234-9278-259535ee92fe"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_8" data-component-id="26">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-10"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_32"
        data-csa-c-pos="32" data-csa-c-item-id="amzn1.asin.1.B0BBM7L888" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="hhrt2b-kr0yvc-rxhwjf-tswa0u" data-cel-widget="MAIN-SEARCH_RESULTS-10">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/realme-Storage-Octa-core-Processor-Battery/dp/B0BBM7L888/ref=sr_1_32?qid=1689790964&amp;s=electronics&amp;sr=1-32">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/81WPIz1l5wL._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/81WPIz1l5wL._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/81WPIz1l5wL._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/81WPIz1l5wL._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/81WPIz1l5wL._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/81WPIz1l5wL._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="realme narzo 50i Prime (Dark Blue 4GB RAM+64GB Storage) Octa-core Processor | 5000 mAh Battery"
                                    data-image-index="32" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/realme-Storage-Octa-core-Processor-Battery/dp/B0BBM7L888/ref=sr_1_32?qid=1689790964&amp;s=electronics&amp;sr=1-32"><span
                                    class="a-size-base-plus a-color-base a-text-normal">realme narzo 50i Prime (Dark
                                    Blue 4GB RAM+64GB Storage) Octa-core Processor | 5000 mAh Battery</span> </a>
                        </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="4.0 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0BBM7L888&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="q8pjl8-jmig34-5io25f-vt7ws4"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span
                                                class="a-icon-alt">4.0 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="5,417"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/realme-Storage-Octa-core-Processor-Battery/dp/B0BBM7L888/ref=sr_1_32?qid=1689790964&amp;s=electronics&amp;sr=1-32#customerReviews"><span
                                        class="a-size-base s-underline-text">5,417</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/realme-Storage-Octa-core-Processor-Battery/dp/B0BBM7L888/ref=sr_1_32?qid=1689790964&amp;s=electronics&amp;sr=1-32"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹7,699</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">7,699</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹9,999</span><span
                                            aria-hidden="true">₹9,999</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(23% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="27"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">10% Off on Select Bank
                                            Cards</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">10% Off on Select Bank
                                            Cards</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


<div data-asin="B0BDHX8Z63" data-index="11" data-uuid="6174eb10-f85f-436e-9229-2df309f6c3ab"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_9" data-component-id="28">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-11"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_33"
        data-csa-c-pos="33" data-csa-c-item-id="amzn1.asin.1.B0BDHX8Z63" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="2peov2-hjq8df-saasxs-gh6xw2" data-cel-widget="MAIN-SEARCH_RESULTS-11">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/Apple-iPhone-14-128GB-Midnight/dp/B0BDHX8Z63/ref=sr_1_33?qid=1689790964&amp;s=electronics&amp;sr=1-33">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/61cwywLZR-L._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="Apple iPhone 14 (128 GB) - Midnight" data-image-index="33"
                                    data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Apple-iPhone-14-128GB-Midnight/dp/B0BDHX8Z63/ref=sr_1_33?qid=1689790964&amp;s=electronics&amp;sr=1-33"><span
                                    class="a-size-base-plus a-color-base a-text-normal">Apple iPhone 14 (128 GB) -
                                    Midnight</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="4.5 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0BDHX8Z63&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="dje5xs-pizt9c-v5n7w8-z8yeij"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4-5 aok-align-bottom"><span
                                                class="a-icon-alt">4.5 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="1,865"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/Apple-iPhone-14-128GB-Midnight/dp/B0BDHX8Z63/ref=sr_1_33?qid=1689790964&amp;s=electronics&amp;sr=1-33#customerReviews"><span
                                        class="a-size-base s-underline-text">1,865</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                href="/gp/goldbox/"><span id="BEST_DEAL_B0BDHX8Z63" class="a-badge"
                                    data-a-badge-type="deal"><span id="BEST_DEAL_B0BDHX8Z63-label"
                                        class="a-badge-label" data-a-badge-color="sx-lightning-deal-red"><span
                                            class="a-badge-label-inner a-text-ellipsis"><span class="a-badge-text"
                                                data-a-badge-color="sx-cloud">Limited time
                                                deal</span></span></span></span> </a> </div>
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Apple-iPhone-14-128GB-Midnight/dp/B0BDHX8Z63/ref=sr_1_33?qid=1689790964&amp;s=electronics&amp;sr=1-33"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹66,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">66,999</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹79,900</span><span
                                            aria-hidden="true">₹79,900</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(16% off)</span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>






<div data-asin="B0C7C1JGQL" data-index="12" data-uuid="93a82775-e435-4c0f-bc62-42ea8f3b4015"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_10" data-component-id="29">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-12"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_34"
        data-csa-c-pos="34" data-csa-c-item-id="amzn1.asin.1.B0C7C1JGQL" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="o2l3x4-o22m3-ff5xey-kqqfao" data-cel-widget="MAIN-SEARCH_RESULTS-12">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/Samsung-Storage-sAMOLED-Display-Battery/dp/B0C7C1JGQL/ref=sr_1_34?qid=1689790964&amp;s=electronics&amp;sr=1-34">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="Samsung Galaxy M34 5G (Prism Silver, 8GB, 128GB Storage) | 120Hz sAMOLED Display | 50MP Triple No Shake Cam | 6000 mAh Bat..."
                                    data-image-index="34" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Samsung-Storage-sAMOLED-Display-Battery/dp/B0C7C1JGQL/ref=sr_1_34?qid=1689790964&amp;s=electronics&amp;sr=1-34"><span
                                    class="a-size-base-plus a-color-base a-text-normal">Samsung Galaxy M34 5G (Prism
                                    Silver, 8GB, 128GB Storage) | 120Hz sAMOLED Display | 50MP Triple No Shake Cam |
                                    6000 mAh Battery | 16GB RAM with RAM Plus | Android 13 | Without Charger</span>
                            </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="3.7 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0C7C1JGQL&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="4lzmaq-uhovkj-ec56il-w198c9"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-3-5 aok-align-bottom"><span
                                                class="a-icon-alt">3.7 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="37"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/Samsung-Storage-sAMOLED-Display-Battery/dp/B0C7C1JGQL/ref=sr_1_34?qid=1689790964&amp;s=electronics&amp;sr=1-34#customerReviews"><span
                                        class="a-size-base s-underline-text">37</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Samsung-Storage-sAMOLED-Display-Battery/dp/B0C7C1JGQL/ref=sr_1_34?qid=1689790964&amp;s=electronics&amp;sr=1-34"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹20,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">20,999</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹25,999</span><span
                                            aria-hidden="true">₹25,999</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(19% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="30"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Flat INR 2000 Off on
                                            SBICards</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Flat INR 2000 Off on
                                            SBICards</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Tuesday, 25 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Tuesday, 25 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B0C46HQY86" data-index="13" data-uuid="d6c821ae-3337-41c0-bac2-be42bd371b2b"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_11" data-component-id="31">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-13"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_35"
        data-csa-c-pos="35" data-csa-c-item-id="amzn1.asin.1.B0C46HQY86" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="hv0tpn-zf5u4i-udtmpu-rotcq2" data-cel-widget="MAIN-SEARCH_RESULTS-13">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/Redmi-Classic-Powerful-Processor-Warranty/dp/B0C46HQY86/ref=sr_1_35?qid=1689790964&amp;s=electronics&amp;sr=1-35">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/810-BAwpF9L._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/810-BAwpF9L._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/810-BAwpF9L._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/810-BAwpF9L._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/810-BAwpF9L._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/810-BAwpF9L._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="Redmi A2 (Classic Black, 2GB RAM, 32GB Storage) | Powerful Octa Core G36 Processor | Upto 7GB RAM | Large 16.5 cm HD+ Disp..."
                                    data-image-index="35" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Redmi-Classic-Powerful-Processor-Warranty/dp/B0C46HQY86/ref=sr_1_35?qid=1689790964&amp;s=electronics&amp;sr=1-35"><span
                                    class="a-size-base-plus a-color-base a-text-normal">Redmi A2 (Classic Black, 2GB
                                    RAM, 32GB Storage) | Powerful Octa Core G36 Processor | Upto 7GB RAM | Large
                                    16.5 cm HD+ Display with Massive 5000mAh Battery | 2 Years Warranty [Limited
                                    time Offer]</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="3.8 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0C46HQY86&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="7m4cu4-7mqxiq-fzvg1o-3bwrne"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span
                                                class="a-icon-alt">3.8 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="1,225"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/Redmi-Classic-Powerful-Processor-Warranty/dp/B0C46HQY86/ref=sr_1_35?qid=1689790964&amp;s=electronics&amp;sr=1-35#customerReviews"><span
                                        class="a-size-base s-underline-text">1,225</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Redmi-Classic-Powerful-Processor-Warranty/dp/B0C46HQY86/ref=sr_1_35?qid=1689790964&amp;s=electronics&amp;sr=1-35"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹6,299</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">6,299</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹8,999</span><span
                                            aria-hidden="true">₹8,999</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(30% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="32"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Save extra with No Cost
                                            EMI</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Save extra with No Cost
                                            EMI</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B0C46H59YD" data-index="14" data-uuid="9b27a4f5-ae42-412c-8eeb-7bb3e7821ca3"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_12" data-component-id="33">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-14"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_36"
        data-csa-c-pos="36" data-csa-c-item-id="amzn1.asin.1.B0C46H59YD" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="t52cjf-yvfh44-rq4tfb-6jcj12" data-cel-widget="MAIN-SEARCH_RESULTS-14">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/Redmi-Storage-Powerful-Processor-Warranty/dp/B0C46H59YD/ref=sr_1_36?qid=1689790964&amp;s=electronics&amp;sr=1-36">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/81bh6SxXQ+L._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/81bh6SxXQ+L._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/81bh6SxXQ+L._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/81bh6SxXQ+L._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/81bh6SxXQ+L._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/81bh6SxXQ+L._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="Redmi A2 (Sea Green, 2GB RAM, 32GB Storage) | Powerful Octa Core G36 Processor | Upto 7GB RAM | Large 16.5 cm HD+ Display ..."
                                    data-image-index="36" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Redmi-Storage-Powerful-Processor-Warranty/dp/B0C46H59YD/ref=sr_1_36?qid=1689790964&amp;s=electronics&amp;sr=1-36"><span
                                    class="a-size-base-plus a-color-base a-text-normal">Redmi A2 (Sea Green, 2GB
                                    RAM, 32GB Storage) | Powerful Octa Core G36 Processor | Upto 7GB RAM | Large
                                    16.5 cm HD+ Display with Massive 5000mAh Battery | 2 Years Warranty [Limited
                                    time Offer]</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="3.8 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0C46H59YD&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="jv3fll-j1qz1d-5sr044-eb38hl"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span
                                                class="a-icon-alt">3.8 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="1,225"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/Redmi-Storage-Powerful-Processor-Warranty/dp/B0C46H59YD/ref=sr_1_36?qid=1689790964&amp;s=electronics&amp;sr=1-36#customerReviews"><span
                                        class="a-size-base s-underline-text">1,225</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Redmi-Storage-Powerful-Processor-Warranty/dp/B0C46H59YD/ref=sr_1_36?qid=1689790964&amp;s=electronics&amp;sr=1-36"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹6,299</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">6,299</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹8,999</span><span
                                            aria-hidden="true">₹8,999</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(30% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="34"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Save extra with No Cost
                                            EMI</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Save extra with No Cost
                                            EMI</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>















<div data-asin="B0C7C2FCY5" data-index="16" data-uuid="8c00e7f3-49f1-4ef2-89b4-bac75ebe8bdb"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_13" data-component-id="35">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-16"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_37"
        data-csa-c-pos="37" data-csa-c-item-id="amzn1.asin.1.B0C7C2FCY5" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="6dpatm-2bomtv-4wkj8r-m26kph" data-cel-widget="MAIN-SEARCH_RESULTS-16">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/Samsung-Midnight-Storage-sAMOLED-Display/dp/B0C7C2FCY5/ref=sr_1_37?qid=1689790964&amp;s=electronics&amp;sr=1-37">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/91fonhAtoAL._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/91fonhAtoAL._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/91fonhAtoAL._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/91fonhAtoAL._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/91fonhAtoAL._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/91fonhAtoAL._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="Samsung Galaxy M34 5G (Midnight Blue, 8GB, 128GB Storage) | 120Hz sAMOLED Display | 50MP Triple No Shake Cam | 6000 mAh Ba..."
                                    data-image-index="37" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Samsung-Midnight-Storage-sAMOLED-Display/dp/B0C7C2FCY5/ref=sr_1_37?qid=1689790964&amp;s=electronics&amp;sr=1-37"><span
                                    class="a-size-base-plus a-color-base a-text-normal">Samsung Galaxy M34 5G
                                    (Midnight Blue, 8GB, 128GB Storage) | 120Hz sAMOLED Display | 50MP Triple No
                                    Shake Cam | 6000 mAh Battery | 16GB RAM with RAM Plus | Android 13 | Without
                                    Charger</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="3.7 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0C7C2FCY5&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="s5n7u0-7ttdk3-xthwau-4tdwfc"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-3-5 aok-align-bottom"><span
                                                class="a-icon-alt">3.7 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="37"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/Samsung-Midnight-Storage-sAMOLED-Display/dp/B0C7C2FCY5/ref=sr_1_37?qid=1689790964&amp;s=electronics&amp;sr=1-37#customerReviews"><span
                                        class="a-size-base s-underline-text">37</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Samsung-Midnight-Storage-sAMOLED-Display/dp/B0C7C2FCY5/ref=sr_1_37?qid=1689790964&amp;s=electronics&amp;sr=1-37"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹20,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">20,999</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹25,999</span><span
                                            aria-hidden="true">₹25,999</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(19% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="36"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Flat INR 2000 Off on
                                            SBICards</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Flat INR 2000 Off on
                                            SBICards</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B0BBM78DMV" data-index="17" data-uuid="0b483923-3170-4eb4-af0c-c9753a93cf09"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_14" data-component-id="37">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-17"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_38"
        data-csa-c-pos="38" data-csa-c-item-id="amzn1.asin.1.B0BBM78DMV" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="cgi9xi-wsl7uz-nlggs-90w58" data-cel-widget="MAIN-SEARCH_RESULTS-17">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/realme-Storage-Octa-core-Processor-Battery/dp/B0BBM78DMV/ref=sr_1_38?qid=1689790964&amp;s=electronics&amp;sr=1-38">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/819bwF7gjfL._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/819bwF7gjfL._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/819bwF7gjfL._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/819bwF7gjfL._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/819bwF7gjfL._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/819bwF7gjfL._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="realme narzo 50i Prime (Mint Green 4GB RAM+64GB Storage) Octa-core Processor |5000 mAh Battery"
                                    data-image-index="38" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/realme-Storage-Octa-core-Processor-Battery/dp/B0BBM78DMV/ref=sr_1_38?qid=1689790964&amp;s=electronics&amp;sr=1-38"><span
                                    class="a-size-base-plus a-color-base a-text-normal">realme narzo 50i Prime (Mint
                                    Green 4GB RAM+64GB Storage) Octa-core Processor |5000 mAh Battery</span> </a>
                        </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="4.0 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0BBM78DMV&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="lzm0fj-d50w6f-ogcbul-855h3e"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span
                                                class="a-icon-alt">4.0 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="5,417"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/realme-Storage-Octa-core-Processor-Battery/dp/B0BBM78DMV/ref=sr_1_38?qid=1689790964&amp;s=electronics&amp;sr=1-38#customerReviews"><span
                                        class="a-size-base s-underline-text">5,417</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/realme-Storage-Octa-core-Processor-Battery/dp/B0BBM78DMV/ref=sr_1_38?qid=1689790964&amp;s=electronics&amp;sr=1-38"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹7,699</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">7,699</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹9,999</span><span
                                            aria-hidden="true">₹9,999</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(23% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="38"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">No Cost EMI available on select
                                            cards.</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">No Cost EMI available on select
                                            cards.</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B0BZ479WZD" data-index="18" data-uuid="17171c8d-cd73-4899-a9b4-85f1911e3b55"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_15" data-component-id="39">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-18"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_39"
        data-csa-c-pos="39" data-csa-c-item-id="amzn1.asin.1.B0BZ479WZD" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="din5xm-ljl6em-hqoki6-qpvp8q" data-cel-widget="MAIN-SEARCH_RESULTS-18">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/realme-Segment-Fastest-Charging-High-res/dp/B0BZ479WZD/ref=sr_1_39?qid=1689790964&amp;s=electronics&amp;sr=1-39">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/71Ftzmh3XWL._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/71Ftzmh3XWL._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/71Ftzmh3XWL._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/71Ftzmh3XWL._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/71Ftzmh3XWL._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/71Ftzmh3XWL._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="realme narzo N55 (Prime Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera"
                                    data-image-index="39" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/realme-Segment-Fastest-Charging-High-res/dp/B0BZ479WZD/ref=sr_1_39?qid=1689790964&amp;s=electronics&amp;sr=1-39"><span
                                    class="a-size-base-plus a-color-base a-text-normal">realme narzo N55 (Prime
                                    Blue, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI
                                    Camera</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="4.1 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0BZ479WZD&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="i9srkw-i8gwox-lwl3a0-cwg5p5"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span
                                                class="a-icon-alt">4.1 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="4,092"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/realme-Segment-Fastest-Charging-High-res/dp/B0BZ479WZD/ref=sr_1_39?qid=1689790964&amp;s=electronics&amp;sr=1-39#customerReviews"><span
                                        class="a-size-base s-underline-text">4,092</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/realme-Segment-Fastest-Charging-High-res/dp/B0BZ479WZD/ref=sr_1_39?qid=1689790964&amp;s=electronics&amp;sr=1-39"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹10,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">10,999</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹12,999</span><span
                                            aria-hidden="true">₹12,999</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(15% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="40"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Save extra with No Cost
                                            EMI</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Save extra with No Cost
                                            EMI</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B0BNDGTH18" data-index="19" data-uuid="2aee1dae-7dd5-476c-bb47-f02d2833f6c0"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 AdHolder sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_16" data-component-id="41">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-19"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_40"
        data-csa-c-pos="40" data-csa-c-item-id="amzn1.asin.1.B0BNDGTH18" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="2hv6vs-rc1q0v-clf2ft-fj66a3" data-cel-widget="MAIN-SEARCH_RESULTS-19">


        <div data-component-type="s-impression-logger"
            data-component-props="{&quot;percentageShownToFire&quot;:&quot;50&quot;,&quot;batchable&quot;:true,&quot;requiredElementSelector&quot;:&quot;.s-image:visible&quot;,&quot;url&quot;:&quot;https://unagi-eu.amazon.com/1/events/com.amazon.eel.SponsoredProductsEventTracking.prod?qualifier=1689790964&amp;id=7560716100673491&amp;widgetName=sp_mtf_browse&amp;adId=20097999263798&amp;eventType=1&amp;adIndex=3&quot;}"
            class="rush-component s-expand-height" data-component-id="42">



            <div data-component-type="s-impression-counter"
                data-component-props="{&quot;presenceCounterName&quot;:&quot;sp_delivered&quot;,&quot;testElementSelector&quot;:&quot;.s-image&quot;,&quot;hiddenCounterName&quot;:&quot;sp_hidden&quot;}"
                class="rush-component s-featured-result-item s-expand-height" data-component-id="7">
                <div
                    class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
                    <div class="a-section a-spacing-base">
                        <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                            style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                                class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                                    target="_blank"
                                    href="/sspa/click?ie=UTF8&amp;spc=MTo3NTYwNzE2MTAwNjczNDkxOjE2ODk3OTA5NjQ6c3BfbXRmX2Jyb3dzZToyMDA5Nzk5OTI2Mzc5ODo6MDo6&amp;url=%2FVox-V10-Keypad-Contact-Recording%2Fdp%2FB0BNDGTH18%2Fref%3Dsr_1_40_sspa%3Fqid%3D1689790964%26s%3Delectronics%26sr%3D1-40-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGZfYnJvd3Nl%26psc%3D1">
                                    <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                            src="https://m.media-amazon.com/images/I/51n-mg0hc8L._AC_UL400_.jpg"
                                            srcset="https://m.media-amazon.com/images/I/51n-mg0hc8L._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/51n-mg0hc8L._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/51n-mg0hc8L._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/51n-mg0hc8L._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/51n-mg0hc8L._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                            alt="Sponsored Ad - Vox V10 1.8 Inch Dual Sim Keypad Mobile with (Contact Icon, King Talker &amp; Auto Call Recording) (Black)"
                                            data-image-index="40" data-image-load=""
                                            data-image-latency="s-product-image" data-image-source-density="1">
                                    </div>
                                </a></span></div>
                        <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                            <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                                <div class="a-row a-spacing-micro"><span class="a-declarative"
                                        data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                        data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                        data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                        data-a-popover="{&quot;name&quot;:&quot;sp-info-popover-B0BNDGTH18&quot;,&quot;position&quot;:&quot;triggerVertical&quot;,&quot;closeButton&quot;:&quot;true&quot;,&quot;dataStrategy&quot;:&quot;preload&quot;}"
                                        data-csa-c-id="tu59hn-26a1fx-29xrim-cbefvf"><a href="javascript:void(0)"
                                            role="button" style="text-decoration: none;"
                                            aria-label="View Sponsored information or leave ad feedback"
                                            class="puis-label-popover puis-sponsored-label-text"><span
                                                class="puis-label-popover-default"><span
                                                    class="a-color-secondary">Sponsored</span></span><span
                                                class="puis-label-popover-hover"><span
                                                    class="a-color-base">Sponsored</span></span> <span
                                                class="aok-inline-block puis-sponsored-label-info-icon"></span></a></span>
                                    <div class="a-popover-preload" id="a-popover-sp-info-popover-B0BNDGTH18">
                                        <div class="puis puis-v132n5e4faosf42v0eo3rf7vw9m"><span>You are seeing this
                                                ad based on the product’s relevance to your search query.</span>
                                            <div class="a-row"><span class="a-declarative"
                                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq"
                                                    data-action="s-safe-ajax-modal-trigger" data-csa-c-type="widget"
                                                    data-csa-c-func-deps="aui-da-s-safe-ajax-modal-trigger"
                                                    data-s-safe-ajax-modal-trigger="{&quot;header&quot;:&quot;Leave feedback&quot;,&quot;dataStrategy&quot;:&quot;ajax&quot;,&quot;ajaxUrl&quot;:&quot;/af/sp-loom/feedback-form?pl=%7B%22adPlacementMetaData%22%3A%7B%22searchTerms%22%3A%22U21hcnRwaG9uZXMgJiBCYXNpYyBNb2JpbGVz%22%2C%22pageType%22%3A%22Search%22%2C%22feedbackType%22%3A%22sponsoredProductsLoom%22%2C%22slotName%22%3A%22MOP%22%7D%2C%22adCreativeMetaData%22%3A%7B%22adProgramId%22%3A1024%2C%22adCreativeDetails%22%3A%5B%7B%22asin%22%3A%22B0BNDGTH18%22%2C%22title%22%3A%22Vox+V10+1.8+Inch+Dual+Sim+Keypad+Mobile+with+%28Contact+Icon%2C+King+Talker+%26+Auto+Call+Recording%29+%28Blac%22%2C%22priceInfo%22%3A%7B%22amount%22%3A774.0%2C%22currencyCode%22%3A%22INR%22%7D%2C%22sku%22%3A%22O9-EKTL-T28G%22%2C%22adId%22%3A%22A098074733X0ZMQ3R4CQY%22%2C%22campaignId%22%3A%22A09582973U4RCPMOHELLD%22%2C%22advertiserIdNS%22%3Anull%2C%22selectionSignals%22%3Anull%7D%5D%7D%7D&quot;}"
                                                    data-csa-c-id="sy7ua8-dc8e1g-i84rvl-xxidct"><a
                                                        class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                                        href="#"><span>Let us know</span> </a> </span></div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                        class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                        target="_blank"
                                        href="/sspa/click?ie=UTF8&amp;spc=MTo3NTYwNzE2MTAwNjczNDkxOjE2ODk3OTA5NjQ6c3BfbXRmX2Jyb3dzZToyMDA5Nzk5OTI2Mzc5ODo6MDo6&amp;url=%2FVox-V10-Keypad-Contact-Recording%2Fdp%2FB0BNDGTH18%2Fref%3Dsr_1_40_sspa%3Fqid%3D1689790964%26s%3Delectronics%26sr%3D1-40-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGZfYnJvd3Nl%26psc%3D1"><span
                                            class="a-size-base-plus a-color-base a-text-normal">Vox V10 1.8 Inch
                                            Dual Sim Keypad Mobile with (Contact Icon, King Talker &amp; Auto Call
                                            Recording) (Black)</span> </a> </h2>
                            </div>
                            <div class="a-section a-spacing-none a-spacing-top-micro">
                                <div class="a-row a-size-small"><span aria-label="2.7 out of 5 stars"><span
                                            class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                            data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                            data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                            data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0BNDGTH18&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                            data-csa-c-id="b71w23-84lg79-leqysm-3jrz4e"><a href="javascript:void(0)"
                                                role="button" class="a-popover-trigger a-declarative"><i
                                                    class="a-icon a-icon-star-small a-star-small-2-5 aok-align-bottom"><span
                                                        class="a-icon-alt">2.7 out of 5 stars</span></i><i
                                                    class="a-icon a-icon-popover"></i></a></span> </span><span
                                        aria-label="19"><a
                                            class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                            target="_blank"
                                            href="/sspa/click?ie=UTF8&amp;spc=MTo3NTYwNzE2MTAwNjczNDkxOjE2ODk3OTA5NjQ6c3BfbXRmX2Jyb3dzZToyMDA5Nzk5OTI2Mzc5ODo6MDo6&amp;url=%2FVox-V10-Keypad-Contact-Recording%2Fdp%2FB0BNDGTH18%2Fref%3Dsr_1_40_sspa%3Fqid%3D1689790964%26s%3Delectronics%26sr%3D1-40-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGZfYnJvd3Nl%26psc%3D1#customerReviews"><span
                                                class="a-size-base s-underline-text">19</span> </a> </span></div>
                            </div>
                            <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                                <div class="a-row a-size-base a-color-base"><a
                                        class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                        target="_blank"
                                        href="/sspa/click?ie=UTF8&amp;spc=MTo3NTYwNzE2MTAwNjczNDkxOjE2ODk3OTA5NjQ6c3BfbXRmX2Jyb3dzZToyMDA5Nzk5OTI2Mzc5ODo6MDo6&amp;url=%2FVox-V10-Keypad-Contact-Recording%2Fdp%2FB0BNDGTH18%2Fref%3Dsr_1_40_sspa%3Fqid%3D1689790964%26s%3Delectronics%26sr%3D1-40-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGZfYnJvd3Nl%26psc%3D1"><span
                                            class="a-price" data-a-size="xl" data-a-color="base"><span
                                                class="a-offscreen">₹774</span><span aria-hidden="true"><span
                                                    class="a-price-symbol">₹</span><span
                                                    class="a-price-whole">774</span></span></span>
                                        <div style="display: inline-block"><span
                                                class="a-size-base a-color-secondary">M.R.P: </span><span
                                                class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                                data-a-color="secondary"><span
                                                    class="a-offscreen">₹1,499</span><span
                                                    aria-hidden="true">₹1,499</span></span></div>
                                    </a> <span class="a-letter-space"></span><span>(48% off)</span></div>
                            </div>
                            <div class="a-section a-spacing-none a-spacing-top-micro">
                                <div class="a-row a-size-base a-color-secondary s-align-children-center"><span
                                        class="aok-inline-block s-image-logo-view"><span
                                            class="aok-relative s-icon-text-medium s-prime"><i
                                                class="a-icon a-icon-prime a-icon-medium" role="img"
                                                aria-label="Amazon Prime"></i></span><span></span></span> <span
                                        aria-label="Get it by Monday, 24 July"><span class="a-color-base">Get it by
                                        </span><span class="a-color-base a-text-bold">Monday, 24 July</span></span>
                                </div>
                                <div class="a-row a-size-base a-color-secondary"><span
                                        aria-label="Only 2 left in stock."><span
                                            class="a-size-base a-color-price">Only 2 left in stock.</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</div>







<div data-asin="B0BNDL48W4" data-index="20" data-uuid="c8c4051e-22a7-4350-9feb-af7de20f89fa"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 AdHolder sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_17" data-component-id="43">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-20"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_41"
        data-csa-c-pos="41" data-csa-c-item-id="amzn1.asin.1.B0BNDL48W4" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="5kze8w-gov6qz-khqsoq-vvu4iy" data-cel-widget="MAIN-SEARCH_RESULTS-20">


        <div data-component-type="s-impression-logger"
            data-component-props="{&quot;percentageShownToFire&quot;:&quot;50&quot;,&quot;batchable&quot;:true,&quot;requiredElementSelector&quot;:&quot;.s-image:visible&quot;,&quot;url&quot;:&quot;https://unagi-eu.amazon.com/1/events/com.amazon.eel.SponsoredProductsEventTracking.prod?qualifier=1689790964&amp;id=7560716100673491&amp;widgetName=sp_mtf_browse&amp;adId=20097999263498&amp;eventType=1&amp;adIndex=4&quot;}"
            class="rush-component s-expand-height" data-component-id="44">



            <div data-component-type="s-impression-counter"
                data-component-props="{&quot;presenceCounterName&quot;:&quot;sp_delivered&quot;,&quot;testElementSelector&quot;:&quot;.s-image&quot;,&quot;hiddenCounterName&quot;:&quot;sp_hidden&quot;}"
                class="rush-component s-featured-result-item s-expand-height" data-component-id="8">
                <div
                    class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
                    <div class="a-section a-spacing-base">
                        <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                            style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                                class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                                    target="_blank"
                                    href="/sspa/click?ie=UTF8&amp;spc=MTo3NTYwNzE2MTAwNjczNDkxOjE2ODk3OTA5NjQ6c3BfbXRmX2Jyb3dzZToyMDA5Nzk5OTI2MzQ5ODo6MDo6&amp;url=%2FVox-V14-Contact-Recording-Display%2Fdp%2FB0BNDL48W4%2Fref%3Dsr_1_41_sspa%3Fqid%3D1689790964%26s%3Delectronics%26sr%3D1-41-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGZfYnJvd3Nl%26psc%3D1">
                                    <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                            src="https://m.media-amazon.com/images/I/61FZhHOzMAL._AC_UL400_.jpg"
                                            srcset="https://m.media-amazon.com/images/I/61FZhHOzMAL._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/61FZhHOzMAL._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/61FZhHOzMAL._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/61FZhHOzMAL._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/61FZhHOzMAL._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                            alt="Sponsored Ad - Vox V14 Keypad Mobile with King Talker, Contact Icon, Auto Call Recording (2.4 Inch Display, Dual Sim) (Brown)"
                                            data-image-index="41" data-image-load=""
                                            data-image-latency="s-product-image" data-image-source-density="1">
                                    </div>
                                </a></span></div>
                        <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                            <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                                <div class="a-row a-spacing-micro"><span class="a-declarative"
                                        data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                        data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                        data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                        data-a-popover="{&quot;name&quot;:&quot;sp-info-popover-B0BNDL48W4&quot;,&quot;position&quot;:&quot;triggerVertical&quot;,&quot;closeButton&quot;:&quot;true&quot;,&quot;dataStrategy&quot;:&quot;preload&quot;}"
                                        data-csa-c-id="rtc05m-hup8c5-xci82c-3tz1zx"><a href="javascript:void(0)"
                                            role="button" style="text-decoration: none;"
                                            aria-label="View Sponsored information or leave ad feedback"
                                            class="puis-label-popover puis-sponsored-label-text"><span
                                                class="puis-label-popover-default"><span
                                                    class="a-color-secondary">Sponsored</span></span><span
                                                class="puis-label-popover-hover"><span
                                                    class="a-color-base">Sponsored</span></span> <span
                                                class="aok-inline-block puis-sponsored-label-info-icon"></span></a></span>
                                    <div class="a-popover-preload" id="a-popover-sp-info-popover-B0BNDL48W4">
                                        <div class="puis puis-v132n5e4faosf42v0eo3rf7vw9m"><span>You are seeing this
                                                ad based on the product’s relevance to your search query.</span>
                                            <div class="a-row"><span class="a-declarative"
                                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq"
                                                    data-action="s-safe-ajax-modal-trigger" data-csa-c-type="widget"
                                                    data-csa-c-func-deps="aui-da-s-safe-ajax-modal-trigger"
                                                    data-s-safe-ajax-modal-trigger="{&quot;header&quot;:&quot;Leave feedback&quot;,&quot;dataStrategy&quot;:&quot;ajax&quot;,&quot;ajaxUrl&quot;:&quot;/af/sp-loom/feedback-form?pl=%7B%22adPlacementMetaData%22%3A%7B%22searchTerms%22%3A%22U21hcnRwaG9uZXMgJiBCYXNpYyBNb2JpbGVz%22%2C%22pageType%22%3A%22Search%22%2C%22feedbackType%22%3A%22sponsoredProductsLoom%22%2C%22slotName%22%3A%22MOP%22%7D%2C%22adCreativeMetaData%22%3A%7B%22adProgramId%22%3A1024%2C%22adCreativeDetails%22%3A%5B%7B%22asin%22%3A%22B0BNDL48W4%22%2C%22title%22%3A%22Vox+V14+Keypad+Mobile+with+King+Talker%2C+Contact+Icon%2C+Auto+Call+Recording+%282.4+Inch+Display%2C+Dual+Si%22%2C%22priceInfo%22%3A%7B%22amount%22%3A883.0%2C%22currencyCode%22%3A%22INR%22%7D%2C%22sku%22%3A%2238-6AEC-YDOX%22%2C%22adId%22%3A%22A0981247FAAFE3AX88WL%22%2C%22campaignId%22%3A%22A09582973U4RCPMOHELLD%22%2C%22advertiserIdNS%22%3Anull%2C%22selectionSignals%22%3Anull%7D%5D%7D%7D&quot;}"
                                                    data-csa-c-id="msm1ia-ksob74-l9sr97-7127we"><a
                                                        class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                                        href="#"><span>Let us know</span> </a> </span></div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                        class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                        target="_blank"
                                        href="/sspa/click?ie=UTF8&amp;spc=MTo3NTYwNzE2MTAwNjczNDkxOjE2ODk3OTA5NjQ6c3BfbXRmX2Jyb3dzZToyMDA5Nzk5OTI2MzQ5ODo6MDo6&amp;url=%2FVox-V14-Contact-Recording-Display%2Fdp%2FB0BNDL48W4%2Fref%3Dsr_1_41_sspa%3Fqid%3D1689790964%26s%3Delectronics%26sr%3D1-41-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGZfYnJvd3Nl%26psc%3D1"><span
                                            class="a-size-base-plus a-color-base a-text-normal">Vox V14 Keypad
                                            Mobile with King Talker, Contact Icon, Auto Call Recording (2.4 Inch
                                            Display, Dual Sim) (Brown)</span> </a> </h2>
                            </div>
                            <div class="a-section a-spacing-none a-spacing-top-micro">
                                <div class="a-row a-size-small"><span aria-label="2.9 out of 5 stars"><span
                                            class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                            data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                            data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                            data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0BNDL48W4&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                            data-csa-c-id="sw6w7y-tu05xs-x2h0hw-zb017"><a href="javascript:void(0)"
                                                role="button" class="a-popover-trigger a-declarative"><i
                                                    class="a-icon a-icon-star-small a-star-small-3 aok-align-bottom"><span
                                                        class="a-icon-alt">2.9 out of 5 stars</span></i><i
                                                    class="a-icon a-icon-popover"></i></a></span> </span><span
                                        aria-label="64"><a
                                            class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                            target="_blank"
                                            href="/sspa/click?ie=UTF8&amp;spc=MTo3NTYwNzE2MTAwNjczNDkxOjE2ODk3OTA5NjQ6c3BfbXRmX2Jyb3dzZToyMDA5Nzk5OTI2MzQ5ODo6MDo6&amp;url=%2FVox-V14-Contact-Recording-Display%2Fdp%2FB0BNDL48W4%2Fref%3Dsr_1_41_sspa%3Fqid%3D1689790964%26s%3Delectronics%26sr%3D1-41-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGZfYnJvd3Nl%26psc%3D1#customerReviews"><span
                                                class="a-size-base s-underline-text">64</span> </a> </span></div>
                            </div>
                            <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                                <div class="a-row a-size-base a-color-base"><a
                                        class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                        target="_blank"
                                        href="/sspa/click?ie=UTF8&amp;spc=MTo3NTYwNzE2MTAwNjczNDkxOjE2ODk3OTA5NjQ6c3BfbXRmX2Jyb3dzZToyMDA5Nzk5OTI2MzQ5ODo6MDo6&amp;url=%2FVox-V14-Contact-Recording-Display%2Fdp%2FB0BNDL48W4%2Fref%3Dsr_1_41_sspa%3Fqid%3D1689790964%26s%3Delectronics%26sr%3D1-41-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGZfYnJvd3Nl%26psc%3D1"><span
                                            class="a-price" data-a-size="xl" data-a-color="base"><span
                                                class="a-offscreen">₹883</span><span aria-hidden="true"><span
                                                    class="a-price-symbol">₹</span><span
                                                    class="a-price-whole">883</span></span></span>
                                        <div style="display: inline-block"><span
                                                class="a-size-base a-color-secondary">M.R.P: </span><span
                                                class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                                data-a-color="secondary"><span
                                                    class="a-offscreen">₹1,499</span><span
                                                    aria-hidden="true">₹1,499</span></span></div>
                                    </a> <span class="a-letter-space"></span><span>(41% off)</span></div>
                            </div>
                            <div class="a-section a-spacing-none a-spacing-top-micro">
                                <div class="a-row a-size-base a-color-secondary s-align-children-center"><span
                                        class="aok-inline-block s-image-logo-view"><span
                                            class="aok-relative s-icon-text-medium s-prime"><i
                                                class="a-icon a-icon-prime a-icon-medium" role="img"
                                                aria-label="Amazon Prime"></i></span><span></span></span> <span
                                        aria-label="Get it by Monday, 24 July"><span class="a-color-base">Get it by
                                        </span><span class="a-color-base a-text-bold">Monday, 24 July</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</div>







<div data-asin="B0BB7H3NGZ" data-index="21" data-uuid="c4aadaf3-cd7e-41f0-bcdb-f98363f3e537"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 AdHolder sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_18" data-component-id="45">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-21"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_42"
        data-csa-c-pos="42" data-csa-c-item-id="amzn1.asin.1.B0BB7H3NGZ" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="59e1hc-gzan7g-aplzm5-veb2oi" data-cel-widget="MAIN-SEARCH_RESULTS-21">


        <div data-component-type="s-impression-logger"
            data-component-props="{&quot;percentageShownToFire&quot;:&quot;50&quot;,&quot;batchable&quot;:true,&quot;requiredElementSelector&quot;:&quot;.s-image:visible&quot;,&quot;url&quot;:&quot;https://unagi-eu.amazon.com/1/events/com.amazon.eel.SponsoredProductsEventTracking.prod?qualifier=1689790964&amp;id=7560716100673491&amp;widgetName=sp_mtf_browse&amp;adId=300014706912532&amp;eventType=1&amp;adIndex=5&quot;}"
            class="rush-component s-expand-height" data-component-id="46">



            <div data-component-type="s-impression-counter"
                data-component-props="{&quot;presenceCounterName&quot;:&quot;sp_delivered&quot;,&quot;testElementSelector&quot;:&quot;.s-image&quot;,&quot;hiddenCounterName&quot;:&quot;sp_hidden&quot;}"
                class="rush-component s-featured-result-item s-expand-height" data-component-id="9">
                <div
                    class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
                    <div class="a-section a-spacing-base">
                        <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                            style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                                class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                                    target="_blank"
                                    href="/sspa/click?ie=UTF8&amp;spc=MTo3NTYwNzE2MTAwNjczNDkxOjE2ODk3OTA5NjQ6c3BfbXRmX2Jyb3dzZTozMDAwMTQ3MDY5MTI1MzI6OjA6Og&amp;url=%2FVox-Keypad-Mobile-Inch-Blue%2Fdp%2FB0BB7H3NGZ%2Fref%3Dsr_1_42_sspa%3Fqid%3D1689790964%26s%3Delectronics%26sr%3D1-42-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGZfYnJvd3Nl%26psc%3D1">
                                    <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                            src="https://m.media-amazon.com/images/I/515MMAF87jL._AC_UL400_.jpg"
                                            srcset="https://m.media-amazon.com/images/I/515MMAF87jL._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/515MMAF87jL._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/515MMAF87jL._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/515MMAF87jL._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/515MMAF87jL._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                            alt="Sponsored Ad - Vox V14 Keypad Mobile (2.4 Inch, Dual Sim) (Blue)"
                                            data-image-index="42" data-image-load=""
                                            data-image-latency="s-product-image" data-image-source-density="1">
                                    </div>
                                </a></span></div>
                        <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                            <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                                <div class="a-row a-spacing-micro"><span class="a-declarative"
                                        data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                        data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                        data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                        data-a-popover="{&quot;name&quot;:&quot;sp-info-popover-B0BB7H3NGZ&quot;,&quot;position&quot;:&quot;triggerVertical&quot;,&quot;closeButton&quot;:&quot;true&quot;,&quot;dataStrategy&quot;:&quot;preload&quot;}"
                                        data-csa-c-id="bo4mq7-lyf3xa-dmdls-8qdat9"><a href="javascript:void(0)"
                                            role="button" style="text-decoration: none;"
                                            aria-label="View Sponsored information or leave ad feedback"
                                            class="puis-label-popover puis-sponsored-label-text"><span
                                                class="puis-label-popover-default"><span
                                                    class="a-color-secondary">Sponsored</span></span><span
                                                class="puis-label-popover-hover"><span
                                                    class="a-color-base">Sponsored</span></span> <span
                                                class="aok-inline-block puis-sponsored-label-info-icon"></span></a></span>
                                    <div class="a-popover-preload" id="a-popover-sp-info-popover-B0BB7H3NGZ">
                                        <div class="puis puis-v132n5e4faosf42v0eo3rf7vw9m"><span>You are seeing this
                                                ad based on the product’s relevance to your search query.</span>
                                            <div class="a-row"><span class="a-declarative"
                                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq"
                                                    data-action="s-safe-ajax-modal-trigger" data-csa-c-type="widget"
                                                    data-csa-c-func-deps="aui-da-s-safe-ajax-modal-trigger"
                                                    data-s-safe-ajax-modal-trigger="{&quot;header&quot;:&quot;Leave feedback&quot;,&quot;dataStrategy&quot;:&quot;ajax&quot;,&quot;ajaxUrl&quot;:&quot;/af/sp-loom/feedback-form?pl=%7B%22adPlacementMetaData%22%3A%7B%22searchTerms%22%3A%22U21hcnRwaG9uZXMgJiBCYXNpYyBNb2JpbGVz%22%2C%22pageType%22%3A%22Search%22%2C%22feedbackType%22%3A%22sponsoredProductsLoom%22%2C%22slotName%22%3A%22MOP%22%7D%2C%22adCreativeMetaData%22%3A%7B%22adProgramId%22%3A1024%2C%22adCreativeDetails%22%3A%5B%7B%22asin%22%3A%22B0BB7H3NGZ%22%2C%22title%22%3A%22Vox+V14+Keypad+Mobile+%282.4+Inch%2C+Dual+Sim%29+%28Blue%29%22%2C%22priceInfo%22%3A%7B%22amount%22%3A883.0%2C%22currencyCode%22%3A%22INR%22%7D%2C%22sku%22%3A%22FAB-C148-ABD57%22%2C%22adId%22%3A%22A0668778XJ0A7RC9NSR9%22%2C%22campaignId%22%3A%22A09582973U4RCPMOHELLD%22%2C%22advertiserIdNS%22%3Anull%2C%22selectionSignals%22%3Anull%7D%5D%7D%7D&quot;}"
                                                    data-csa-c-id="dctzm8-4jwksu-jm6h5n-d5nq57"><a
                                                        class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                                        href="#"><span>Let us know</span> </a> </span></div>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                        class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                        target="_blank"
                                        href="/sspa/click?ie=UTF8&amp;spc=MTo3NTYwNzE2MTAwNjczNDkxOjE2ODk3OTA5NjQ6c3BfbXRmX2Jyb3dzZTozMDAwMTQ3MDY5MTI1MzI6OjA6Og&amp;url=%2FVox-Keypad-Mobile-Inch-Blue%2Fdp%2FB0BB7H3NGZ%2Fref%3Dsr_1_42_sspa%3Fqid%3D1689790964%26s%3Delectronics%26sr%3D1-42-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGZfYnJvd3Nl%26psc%3D1"><span
                                            class="a-size-base-plus a-color-base a-text-normal">Vox V14 Keypad
                                            Mobile (2.4 Inch, Dual Sim) (Blue)</span> </a> </h2>
                            </div>
                            <div class="a-section a-spacing-none a-spacing-top-micro">
                                <div class="a-row a-size-small"><span aria-label="2.8 out of 5 stars"><span
                                            class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                            data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                            data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                            data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0BB7H3NGZ&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                            data-csa-c-id="1cyow8-jp92hv-2e01z-gtcifc"><a href="javascript:void(0)"
                                                role="button" class="a-popover-trigger a-declarative"><i
                                                    class="a-icon a-icon-star-small a-star-small-3 aok-align-bottom"><span
                                                        class="a-icon-alt">2.8 out of 5 stars</span></i><i
                                                    class="a-icon a-icon-popover"></i></a></span> </span><span
                                        aria-label="97"><a
                                            class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                            target="_blank"
                                            href="/sspa/click?ie=UTF8&amp;spc=MTo3NTYwNzE2MTAwNjczNDkxOjE2ODk3OTA5NjQ6c3BfbXRmX2Jyb3dzZTozMDAwMTQ3MDY5MTI1MzI6OjA6Og&amp;url=%2FVox-Keypad-Mobile-Inch-Blue%2Fdp%2FB0BB7H3NGZ%2Fref%3Dsr_1_42_sspa%3Fqid%3D1689790964%26s%3Delectronics%26sr%3D1-42-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGZfYnJvd3Nl%26psc%3D1#customerReviews"><span
                                                class="a-size-base s-underline-text">97</span> </a> </span></div>
                            </div>
                            <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                                <div class="a-row a-size-base a-color-base"><a
                                        class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                        target="_blank"
                                        href="/sspa/click?ie=UTF8&amp;spc=MTo3NTYwNzE2MTAwNjczNDkxOjE2ODk3OTA5NjQ6c3BfbXRmX2Jyb3dzZTozMDAwMTQ3MDY5MTI1MzI6OjA6Og&amp;url=%2FVox-Keypad-Mobile-Inch-Blue%2Fdp%2FB0BB7H3NGZ%2Fref%3Dsr_1_42_sspa%3Fqid%3D1689790964%26s%3Delectronics%26sr%3D1-42-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGZfYnJvd3Nl%26psc%3D1"><span
                                            class="a-price" data-a-size="xl" data-a-color="base"><span
                                                class="a-offscreen">₹883</span><span aria-hidden="true"><span
                                                    class="a-price-symbol">₹</span><span
                                                    class="a-price-whole">883</span></span></span>
                                        <div style="display: inline-block"><span
                                                class="a-size-base a-color-secondary">M.R.P: </span><span
                                                class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                                data-a-color="secondary"><span
                                                    class="a-offscreen">₹1,499</span><span
                                                    aria-hidden="true">₹1,499</span></span></div>
                                    </a> <span class="a-letter-space"></span><span>(41% off)</span></div>
                            </div>
                            <div class="a-section a-spacing-none a-spacing-top-micro">
                                <div class="a-row a-size-base a-color-secondary s-align-children-center"><span
                                        class="aok-inline-block s-image-logo-view"><span
                                            class="aok-relative s-icon-text-medium s-prime"><i
                                                class="a-icon a-icon-prime a-icon-medium" role="img"
                                                aria-label="Amazon Prime"></i></span><span></span></span> <span
                                        aria-label="Get it by Monday, 24 July"><span class="a-color-base">Get it by
                                        </span><span class="a-color-base a-text-bold">Monday, 24 July</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</div>







<div data-asin="B07WFNTGLL" data-index="22" data-uuid="756df9cb-6714-4210-b8b9-3fa91d611ec2"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_19" data-component-id="47">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-22"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_43"
        data-csa-c-pos="43" data-csa-c-item-id="amzn1.asin.1.B07WFNTGLL" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="mirvf-t53wxg-j5c5j9-v5l9w5" data-cel-widget="MAIN-SEARCH_RESULTS-22">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/iQOO-Storage-Snapdragon-Processor-44WFlashCharge/dp/B07WFNTGLL/ref=sr_1_43?qid=1689790964&amp;s=electronics&amp;sr=1-43">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/71k3gOik46L._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/71k3gOik46L._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/71k3gOik46L._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/71k3gOik46L._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/71k3gOik46L._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/71k3gOik46L._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="iQOO Z7s 5G by vivo (Norway Blue, 8GB RAM, 128GB Storage) | Ultra Bright AMOLED Display | Snapdragon 695 5G 6nm Processor..."
                                    data-image-index="43" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/iQOO-Storage-Snapdragon-Processor-44WFlashCharge/dp/B07WFNTGLL/ref=sr_1_43?qid=1689790964&amp;s=electronics&amp;sr=1-43"><span
                                    class="a-size-base-plus a-color-base a-text-normal">iQOO Z7s 5G by vivo (Norway
                                    Blue, 8GB RAM, 128GB Storage) | Ultra Bright AMOLED Display | Snapdragon 695 5G
                                    6nm Processor | 64 MP OIS Ultra Stable Camera | 44WFlashCharge</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="4.1 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B07WFNTGLL&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="9eii4q-h1xk97-2bib9f-7jnvou"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span
                                                class="a-icon-alt">4.1 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="6,408"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/iQOO-Storage-Snapdragon-Processor-44WFlashCharge/dp/B07WFNTGLL/ref=sr_1_43?qid=1689790964&amp;s=electronics&amp;sr=1-43#customerReviews"><span
                                        class="a-size-base s-underline-text">6,408</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/iQOO-Storage-Snapdragon-Processor-44WFlashCharge/dp/B07WFNTGLL/ref=sr_1_43?qid=1689790964&amp;s=electronics&amp;sr=1-43"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹19,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">19,999</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹24,999</span><span
                                            aria-hidden="true">₹24,999</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(20% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="48"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Flat INR 1500 Off on ICICI
                                            BankCards</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Flat INR 1500 Off on ICICI
                                            BankCards</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B0C7VCB59Z" data-index="23" data-uuid="cc260269-2495-44f2-9379-3ac2880402a9"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_20" data-component-id="49">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-23"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_44"
        data-csa-c-pos="44" data-csa-c-item-id="amzn1.asin.1.B0C7VCB59Z" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="bn4jod-pdvde4-f8fux9-g5wfnr" data-cel-widget="MAIN-SEARCH_RESULTS-23">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/OnePlus-Misty-Green-256GB-Storage/dp/B0C7VCB59Z/ref=sr_1_44?qid=1689790964&amp;s=electronics&amp;sr=1-44">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/61ngnTanGnL._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/61ngnTanGnL._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/61ngnTanGnL._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/61ngnTanGnL._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/61ngnTanGnL._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/61ngnTanGnL._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="OnePlus Nord 3 5G (Misty Green, 16GB RAM, 256GB Storage)"
                                    data-image-index="44" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/OnePlus-Misty-Green-256GB-Storage/dp/B0C7VCB59Z/ref=sr_1_44?qid=1689790964&amp;s=electronics&amp;sr=1-44"><span
                                    class="a-size-base-plus a-color-base a-text-normal">OnePlus Nord 3 5G (Misty
                                    Green, 16GB RAM, 256GB Storage)</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/OnePlus-Misty-Green-256GB-Storage/dp/B0C7VCB59Z/ref=sr_1_44?qid=1689790964&amp;s=electronics&amp;sr=1-44"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹37,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">37,999</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹46,651</span><span
                                            aria-hidden="true">₹46,651</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(19% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="50"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Save extra with No Cost
                                            EMI</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Save extra with No Cost
                                            EMI</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Sunday, 23 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Sunday, 23 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B0BDK8LKPJ" data-index="24" data-uuid="071136c3-6175-4392-800b-ca0ecdffa41f"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_21" data-component-id="51">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-24"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_45"
        data-csa-c-pos="45" data-csa-c-item-id="amzn1.asin.1.B0BDK8LKPJ" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="4tq9b1-u9anfa-k1rru4-n642e7" data-cel-widget="MAIN-SEARCH_RESULTS-24">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/Apple-iPhone-14-128GB-Starlight/dp/B0BDK8LKPJ/ref=sr_1_45?qid=1689790964&amp;s=electronics&amp;sr=1-45">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/618Bb+QzCmL._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="Apple iPhone 14 (128 GB) - Starlight" data-image-index="45"
                                    data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Apple-iPhone-14-128GB-Starlight/dp/B0BDK8LKPJ/ref=sr_1_45?qid=1689790964&amp;s=electronics&amp;sr=1-45"><span
                                    class="a-size-base-plus a-color-base a-text-normal">Apple iPhone 14 (128 GB) -
                                    Starlight</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="4.5 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0BDK8LKPJ&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="s62m4c-4fm9mh-ds06lz-xqhzym"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4-5 aok-align-bottom"><span
                                                class="a-icon-alt">4.5 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="1,865"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/Apple-iPhone-14-128GB-Starlight/dp/B0BDK8LKPJ/ref=sr_1_45?qid=1689790964&amp;s=electronics&amp;sr=1-45#customerReviews"><span
                                        class="a-size-base s-underline-text">1,865</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                href="/gp/goldbox/"><span id="BEST_DEAL_B0BDK8LKPJ" class="a-badge"
                                    data-a-badge-type="deal"><span id="BEST_DEAL_B0BDK8LKPJ-label"
                                        class="a-badge-label" data-a-badge-color="sx-lightning-deal-red"><span
                                            class="a-badge-label-inner a-text-ellipsis"><span class="a-badge-text"
                                                data-a-badge-color="sx-cloud">Limited time
                                                deal</span></span></span></span> </a> </div>
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Apple-iPhone-14-128GB-Starlight/dp/B0BDK8LKPJ/ref=sr_1_45?qid=1689790964&amp;s=electronics&amp;sr=1-45"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹66,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">66,999</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹79,900</span><span
                                            aria-hidden="true">₹79,900</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(16% off)</span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B08VB2MRF8" data-index="25" data-uuid="9226905b-2f94-44d0-a59a-614f5ab8e8fc"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_22" data-component-id="52">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-25"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_46"
        data-csa-c-pos="46" data-csa-c-item-id="amzn1.asin.1.B08VB2MRF8" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="tx1x6l-dgiov1-nfa19y-l8wws" data-cel-widget="MAIN-SEARCH_RESULTS-25">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/Samsung-Galaxy-Cloud-128GB-Storage/dp/B08VB2MRF8/ref=sr_1_46?qid=1689790964&amp;s=electronics&amp;sr=1-46">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/812yohjGZ2L._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/812yohjGZ2L._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/812yohjGZ2L._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/812yohjGZ2L._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/812yohjGZ2L._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/812yohjGZ2L._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="Samsung Galaxy S20 FE 5G (Cloud Mint, 8GB RAM, 128GB Storage)"
                                    data-image-index="46" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Samsung-Galaxy-Cloud-128GB-Storage/dp/B08VB2MRF8/ref=sr_1_46?qid=1689790964&amp;s=electronics&amp;sr=1-46"><span
                                    class="a-size-base-plus a-color-base a-text-normal">Samsung Galaxy S20 FE 5G
                                    (Cloud Mint, 8GB RAM, 128GB Storage)</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="4.2 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B08VB2MRF8&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="vm5bbp-dcaycu-5pfdvy-3h5xrx"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span
                                                class="a-icon-alt">4.2 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="32,056"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/Samsung-Galaxy-Cloud-128GB-Storage/dp/B08VB2MRF8/ref=sr_1_46?qid=1689790964&amp;s=electronics&amp;sr=1-46#customerReviews"><span
                                        class="a-size-base s-underline-text">32,056</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                href="/gp/goldbox/"><span id="BEST_DEAL_B08VB2MRF8" class="a-badge"
                                    data-a-badge-type="deal"><span id="BEST_DEAL_B08VB2MRF8-label"
                                        class="a-badge-label" data-a-badge-color="sx-lightning-deal-red"><span
                                            class="a-badge-label-inner a-text-ellipsis"><span class="a-badge-text"
                                                data-a-badge-color="sx-cloud">Limited time
                                                deal</span></span></span></span> </a> </div>
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Samsung-Galaxy-Cloud-128GB-Storage/dp/B08VB2MRF8/ref=sr_1_46?qid=1689790964&amp;s=electronics&amp;sr=1-46"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹34,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">34,999</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹74,990</span><span
                                            aria-hidden="true">₹74,990</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(53% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="53"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Save extra with No Cost
                                            EMI</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Save extra with No Cost
                                            EMI</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B0BZ48VZMR" data-index="26" data-uuid="9f41b092-1b62-4d3d-880b-7fd2f64545c9"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_23" data-component-id="54">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-26"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_47"
        data-csa-c-pos="47" data-csa-c-item-id="amzn1.asin.1.B0BZ48VZMR" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="ofy0qa-caewlz-tmmqel-3fbr84" data-cel-widget="MAIN-SEARCH_RESULTS-26">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 26px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/realme-Segment-Fastest-Charging-High-res/dp/B0BZ48VZMR/ref=sr_1_47?qid=1689790964&amp;s=electronics&amp;sr=1-47">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/81ogvU1j6qL._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/81ogvU1j6qL._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/81ogvU1j6qL._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/81ogvU1j6qL._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/81ogvU1j6qL._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/81ogvU1j6qL._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="realme narzo N55 (Prime Black, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI Camera"
                                    data-image-index="47" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/realme-Segment-Fastest-Charging-High-res/dp/B0BZ48VZMR/ref=sr_1_47?qid=1689790964&amp;s=electronics&amp;sr=1-47"><span
                                    class="a-size-base-plus a-color-base a-text-normal">realme narzo N55 (Prime
                                    Black, 4GB+64GB) 33W Segment Fastest Charging | Super High-res 64MP Primary AI
                                    Camera</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="4.1 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0BZ48VZMR&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="vaaoyn-oolz0-9f5es4-ed1dy9"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span
                                                class="a-icon-alt">4.1 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="4,092"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/realme-Segment-Fastest-Charging-High-res/dp/B0BZ48VZMR/ref=sr_1_47?qid=1689790964&amp;s=electronics&amp;sr=1-47#customerReviews"><span
                                        class="a-size-base s-underline-text">4,092</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/realme-Segment-Fastest-Charging-High-res/dp/B0BZ48VZMR/ref=sr_1_47?qid=1689790964&amp;s=electronics&amp;sr=1-47"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹10,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">10,999</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹12,999</span><span
                                            aria-hidden="true">₹12,999</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(15% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="55"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Save extra with No Cost
                                            EMI</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Save extra with No Cost
                                            EMI</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B07WHRBD95" data-index="27" data-uuid="12b6247e-ce48-4ee8-b032-05b3b7825683"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_24" data-component-id="56">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-27"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_48"
        data-csa-c-pos="48" data-csa-c-item-id="amzn1.asin.1.B07WHRBD95" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="26nly6-8u6ezh-bo1eh4-s3qdwi" data-cel-widget="MAIN-SEARCH_RESULTS-27">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 26px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/iQOO-Storage-Snapdragon%C2%AE-Independent-Flagship/dp/B07WHRBD95/ref=sr_1_48?qid=1689790964&amp;s=electronics&amp;sr=1-48">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/611rQWZa5rL._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/611rQWZa5rL._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/611rQWZa5rL._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/611rQWZa5rL._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/611rQWZa5rL._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/611rQWZa5rL._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="iQOO Neo 7 Pro 5G (Dark Storm, 12GB RAM, 256GB Storage) | Snapdragon® 8+ Gen 1 | Independent Gaming Chip | Flagship 50MP O..."
                                    data-image-index="48" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/iQOO-Storage-Snapdragon%C2%AE-Independent-Flagship/dp/B07WHRBD95/ref=sr_1_48?qid=1689790964&amp;s=electronics&amp;sr=1-48"><span
                                    class="a-size-base-plus a-color-base a-text-normal">iQOO Neo 7 Pro 5G (Dark
                                    Storm, 12GB RAM, 256GB Storage) | Snapdragon® 8+ Gen 1 | Independent Gaming Chip
                                    | Flagship 50MP OIS Camera | AG Glass Design</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="4.3 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B07WHRBD95&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="dymkfx-wv9btz-g72pau-iwoe0g"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4-5 aok-align-bottom"><span
                                                class="a-icon-alt">4.3 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="69"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/iQOO-Storage-Snapdragon%C2%AE-Independent-Flagship/dp/B07WHRBD95/ref=sr_1_48?qid=1689790964&amp;s=electronics&amp;sr=1-48#customerReviews"><span
                                        class="a-size-base s-underline-text">69</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/iQOO-Storage-Snapdragon%C2%AE-Independent-Flagship/dp/B07WHRBD95/ref=sr_1_48?qid=1689790964&amp;s=electronics&amp;sr=1-48"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹37,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">37,999</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹42,999</span><span
                                            aria-hidden="true">₹42,999</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(12% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="57"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Flat INR 2000 Off on
                                            SBICards</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Flat INR 2000 Off on
                                            SBICards</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Wednesday, 26 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Wednesday, 26 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B09YDFKJF8" data-index="28" data-uuid="1a1245db-822d-480c-9375-4709b5bc5073"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_25" data-component-id="58">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-28"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_49"
        data-csa-c-pos="49" data-csa-c-item-id="amzn1.asin.1.B09YDFKJF8" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="9pxvpr-sed97j-yqkw9o-bzm4lk" data-cel-widget="MAIN-SEARCH_RESULTS-28">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div
                    class="a-section a-spacing-none puis-status-badge-container aok-relative s-grid-status-badge-container puis-expand-height">
                    <a class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                        href="/gp/bestsellers/electronics/1805559031/ref=sr_bs_24_1805559031_1"><span
                            data-component-type="s-status-badge-component" class="rush-component"
                            data-component-props="{&quot;asin&quot;:&quot;B09YDFKJF8&quot;,&quot;badgeType&quot;:&quot;best-seller&quot;}"
                            data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                            data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="59">
                            <div class="a-row a-badge-region"><span id="B09YDFKJF8-best-seller" class="a-badge"
                                    aria-labelledby="B09YDFKJF8-best-seller-label B09YDFKJF8-best-seller-supplementary"
                                    data-a-badge-supplementary-position="right" tabindex="0"
                                    data-a-badge-type="status"><span id="B09YDFKJF8-best-seller-label"
                                        class="a-badge-label" data-a-badge-color="sx-orange"
                                        aria-hidden="true"><span class="a-badge-label-inner a-text-ellipsis"><span
                                                class="a-badge-text" data-a-badge-color="sx-cloud">Best
                                                seller</span></span></span><span
                                        id="B09YDFKJF8-best-seller-supplementary"
                                        class="a-badge-supplementary-text a-text-ellipsis" aria-hidden="true">in
                                        Basic Mobiles</span></span></div>
                        </span> </a> </div>
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/Nokia-105-Single-Wireless-Charcoal/dp/B09YDFKJF8/ref=sr_1_49?qid=1689790964&amp;s=electronics&amp;sr=1-49">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/51GSe9rxsoL._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/51GSe9rxsoL._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/51GSe9rxsoL._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/51GSe9rxsoL._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/51GSe9rxsoL._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/51GSe9rxsoL._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="Nokia 105 Plus Single SIM, Keypad Mobile Phone with Wireless FM Radio, Memory Card Slot and MP3 Player | Charcoal"
                                    data-image-index="49" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Nokia-105-Single-Wireless-Charcoal/dp/B09YDFKJF8/ref=sr_1_49?qid=1689790964&amp;s=electronics&amp;sr=1-49"><span
                                    class="a-size-base-plus a-color-base a-text-normal">Nokia 105 Plus Single SIM,
                                    Keypad Mobile Phone with Wireless FM Radio, Memory Card Slot and MP3 Player |
                                    Charcoal</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="3.9 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B09YDFKJF8&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="ct975z-25ww64-2u8sqx-8hyqi4"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span
                                                class="a-icon-alt">3.9 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="2,799"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/Nokia-105-Single-Wireless-Charcoal/dp/B09YDFKJF8/ref=sr_1_49?qid=1689790964&amp;s=electronics&amp;sr=1-49#customerReviews"><span
                                        class="a-size-base s-underline-text">2,799</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                href="/gp/goldbox/"><span id="BEST_DEAL_B09YDFKJF8" class="a-badge"
                                    data-a-badge-type="deal"><span id="BEST_DEAL_B09YDFKJF8-label"
                                        class="a-badge-label" data-a-badge-color="sx-lightning-deal-red"><span
                                            class="a-badge-label-inner a-text-ellipsis"><span class="a-badge-text"
                                                data-a-badge-color="sx-cloud">Limited time
                                                deal</span></span></span></span> </a> </div>
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Nokia-105-Single-Wireless-Charcoal/dp/B09YDFKJF8/ref=sr_1_49?qid=1689790964&amp;s=electronics&amp;sr=1-49"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹1,324</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">1,324</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹1,699</span><span
                                            aria-hidden="true">₹1,699</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(22% off)</span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Saturday, 22 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Saturday, 22 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B0B4F2XCK3" data-index="29" data-uuid="602234f1-3454-420f-b84b-95b7ea59603a"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_26" data-component-id="60">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-29"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_50"
        data-csa-c-pos="50" data-csa-c-item-id="amzn1.asin.1.B0B4F2XCK3" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="wzoa2t-sq7s4p-697blj-tdltcx" data-cel-widget="MAIN-SEARCH_RESULTS-29">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 26px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/Samsung-Galaxy-Storage-6000mAh-Battery/dp/B0B4F2XCK3/ref=sr_1_50?qid=1689790964&amp;s=electronics&amp;sr=1-50">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/81-fFXQdPTL._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="Samsung Galaxy M13 (Aqua Green, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus"
                                    data-image-index="50" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Samsung-Galaxy-Storage-6000mAh-Battery/dp/B0B4F2XCK3/ref=sr_1_50?qid=1689790964&amp;s=electronics&amp;sr=1-50"><span
                                    class="a-size-base-plus a-color-base a-text-normal">Samsung Galaxy M13 (Aqua
                                    Green, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM
                                    Plus</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="4.1 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0B4F2XCK3&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="jj857k-9j5x4t-jzyaq5-x0yuth"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span
                                                class="a-icon-alt">4.1 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="24,567"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/Samsung-Galaxy-Storage-6000mAh-Battery/dp/B0B4F2XCK3/ref=sr_1_50?qid=1689790964&amp;s=electronics&amp;sr=1-50#customerReviews"><span
                                        class="a-size-base s-underline-text">24,567</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Samsung-Galaxy-Storage-6000mAh-Battery/dp/B0B4F2XCK3/ref=sr_1_50?qid=1689790964&amp;s=electronics&amp;sr=1-50"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹12,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">12,999</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹17,999</span><span
                                            aria-hidden="true">₹17,999</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(28% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="61"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Save extra with No Cost
                                            EMI</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Save extra with No Cost
                                            EMI</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B0BZCWLJHK" data-index="30" data-uuid="836cc403-426f-498b-81ae-f461a58d5b43"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_27" data-component-id="62">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-30"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_51"
        data-csa-c-pos="51" data-csa-c-item-id="amzn1.asin.1.B0BZCWLJHK" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="swrv1b-zhiogf-al4cfi-lvh18n" data-cel-widget="MAIN-SEARCH_RESULTS-30">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/Samsung-Storage-Battery-Octa-Core-Processor/dp/B0BZCWLJHK/ref=sr_1_51?qid=1689790964&amp;s=electronics&amp;sr=1-51">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/91HRACirFrL._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/91HRACirFrL._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/91HRACirFrL._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/91HRACirFrL._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/91HRACirFrL._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/91HRACirFrL._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="Samsung Galaxy M14 5G (Berry Blue, 4GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core Processor | An..."
                                    data-image-index="51" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Samsung-Storage-Battery-Octa-Core-Processor/dp/B0BZCWLJHK/ref=sr_1_51?qid=1689790964&amp;s=electronics&amp;sr=1-51"><span
                                    class="a-size-base-plus a-color-base a-text-normal">Samsung Galaxy M14 5G (Berry
                                    Blue, 4GB, 128GB Storage) | 50MP Triple Cam | 6000 mAh Battery | 5nm Octa-Core
                                    Processor | Android 13 | Without Charger</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="3.9 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0BZCWLJHK&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="tctiig-axv1y9-fjai43-r2ydtx"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span
                                                class="a-icon-alt">3.9 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="4,199"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/Samsung-Storage-Battery-Octa-Core-Processor/dp/B0BZCWLJHK/ref=sr_1_51?qid=1689790964&amp;s=electronics&amp;sr=1-51#customerReviews"><span
                                        class="a-size-base s-underline-text">4,199</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Samsung-Storage-Battery-Octa-Core-Processor/dp/B0BZCWLJHK/ref=sr_1_51?qid=1689790964&amp;s=electronics&amp;sr=1-51"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹14,490</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">14,490</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹17,990</span><span
                                            aria-hidden="true">₹17,990</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(19% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="63"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Flat INR 2000 Off on ALL
                                            BanksCards</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Flat INR 2000 Off on ALL
                                            BanksCards</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B0B4F38D6K" data-index="31" data-uuid="56af4921-0539-4b00-bfc1-bf1cb5d59b81"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_28" data-component-id="64">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-31"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_52"
        data-csa-c-pos="52" data-csa-c-item-id="amzn1.asin.1.B0B4F38D6K" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="m1gbev-iro4iy-4epajj-k3rj4z" data-cel-widget="MAIN-SEARCH_RESULTS-31">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/Samsung-Midnight-Storage-6000mAh-Battery/dp/B0B4F38D6K/ref=sr_1_52?qid=1689790964&amp;s=electronics&amp;sr=1-52">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/812YsUxpyfL._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/812YsUxpyfL._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/812YsUxpyfL._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/812YsUxpyfL._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/812YsUxpyfL._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/812YsUxpyfL._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="Samsung Galaxy M13 (Midnight Blue, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus"
                                    data-image-index="52" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Samsung-Midnight-Storage-6000mAh-Battery/dp/B0B4F38D6K/ref=sr_1_52?qid=1689790964&amp;s=electronics&amp;sr=1-52"><span
                                    class="a-size-base-plus a-color-base a-text-normal">Samsung Galaxy M13 (Midnight
                                    Blue, 6GB, 128GB Storage) | 6000mAh Battery | Upto 12GB RAM with RAM Plus</span>
                            </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="4.1 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B0B4F38D6K&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="r5ict1-gp703s-c80okb-yslxjk"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span
                                                class="a-icon-alt">4.1 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="24,567"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/Samsung-Midnight-Storage-6000mAh-Battery/dp/B0B4F38D6K/ref=sr_1_52?qid=1689790964&amp;s=electronics&amp;sr=1-52#customerReviews"><span
                                        class="a-size-base s-underline-text">24,567</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/Samsung-Midnight-Storage-6000mAh-Battery/dp/B0B4F38D6K/ref=sr_1_52?qid=1689790964&amp;s=electronics&amp;sr=1-52"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹12,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">12,999</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹17,999</span><span
                                            aria-hidden="true">₹17,999</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(28% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="65"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Save extra with No Cost
                                            EMI</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Save extra with No Cost
                                            EMI</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B07WHS7MZ4" data-index="32" data-uuid="0e349f9a-95a8-4739-a2b6-3c2485cf82a7"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_29" data-component-id="66">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-32"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_53"
        data-csa-c-pos="53" data-csa-c-item-id="amzn1.asin.1.B07WHS7MZ4" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="2ug8xo-uqjo39-3v3l6g-9ediru" data-cel-widget="MAIN-SEARCH_RESULTS-32">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/iQOO-Storage-Snapdragon-Processor-44WFlashCharge/dp/B07WHS7MZ4/ref=sr_1_53?qid=1689790964&amp;s=electronics&amp;sr=1-53">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/71k3gOik46L._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/71k3gOik46L._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/71k3gOik46L._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/71k3gOik46L._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/71k3gOik46L._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/71k3gOik46L._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="iQOO Z7s 5G by vivo (Norway Blue, 6GB RAM, 128GB Storage) | Ultra Bright AMOLED Display | Snapdragon 695 5G 6nm Processor..."
                                    data-image-index="53" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/iQOO-Storage-Snapdragon-Processor-44WFlashCharge/dp/B07WHS7MZ4/ref=sr_1_53?qid=1689790964&amp;s=electronics&amp;sr=1-53"><span
                                    class="a-size-base-plus a-color-base a-text-normal">iQOO Z7s 5G by vivo (Norway
                                    Blue, 6GB RAM, 128GB Storage) | Ultra Bright AMOLED Display | Snapdragon 695 5G
                                    6nm Processor | 64 MP OIS Ultra Stable Camera | 44WFlashCharge</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-small"><span aria-label="4.1 out of 5 stars"><span
                                    class="a-declarative" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-action="a-popover"
                                    data-csa-c-type="widget" data-csa-c-func-deps="aui-da-a-popover"
                                    data-a-popover="{&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_search__popover?ie=UTF8&amp;asin=B07WHS7MZ4&amp;ref=acr_search__popover&amp;contextId=search&quot;,&quot;closeButton&quot;:false,&quot;closeButtonLabel&quot;:&quot;&quot;}"
                                    data-csa-c-id="ypev3l-x5bd59-9zeyuz-t190hx"><a href="javascript:void(0)"
                                        role="button" class="a-popover-trigger a-declarative"><i
                                            class="a-icon a-icon-star-small a-star-small-4 aok-align-bottom"><span
                                                class="a-icon-alt">4.1 out of 5 stars</span></i><i
                                            class="a-icon a-icon-popover"></i></a></span> </span><span
                                aria-label="6,408"><a
                                    class="a-link-normal s-underline-text s-underline-link-text s-link-style"
                                    target="_blank"
                                    href="/iQOO-Storage-Snapdragon-Processor-44WFlashCharge/dp/B07WHS7MZ4/ref=sr_1_53?qid=1689790964&amp;s=electronics&amp;sr=1-53#customerReviews"><span
                                        class="a-size-base s-underline-text">6,408</span> </a> </span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/iQOO-Storage-Snapdragon-Processor-44WFlashCharge/dp/B07WHS7MZ4/ref=sr_1_53?qid=1689790964&amp;s=electronics&amp;sr=1-53"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹18,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">18,999</span></span></span>
                                <div style="display: inline-block"><span
                                        class="a-size-base a-color-secondary">M.R.P: </span><span
                                        class="a-price a-text-price" data-a-size="b" data-a-strike="true"
                                        data-a-color="secondary"><span class="a-offscreen">₹23,999</span><span
                                            aria-hidden="true">₹23,999</span></span></div>
                            </a> <span class="a-letter-space"></span><span>(21% off)</span></div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="67"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">Flat INR 1500 Off on ICICI
                                            BankCards</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">Flat INR 1500 Off on ICICI
                                            BankCards</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="B0C7VH46D6" data-index="33" data-uuid="8fc0f571-e151-4b50-94a5-377051ba83d8"
data-component-type="s-search-result"
class="sg-col-4-of-24 sg-col-4-of-12 s-result-item s-asin sg-col-4-of-16 sg-col s-widget-spacing-small sg-col-4-of-20"
data-cel-widget="search_result_30" data-component-id="68">
<div class="sg-col-inner">
    <div cel_widget_id="MAIN-SEARCH_RESULTS-33"
        class="s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_54"
        data-csa-c-pos="54" data-csa-c-item-id="amzn1.asin.1.B0C7VH46D6" data-csa-op-log-render=""
        data-csa-c-type="item" data-csa-c-id="soh4cy-8f0xyy-ubusg9-c8q32i" data-cel-widget="MAIN-SEARCH_RESULTS-33">
        <div
            class="s-card-container s-overflow-hidden aok-relative puis-wide-grid-style puis-wide-grid-style-t3 puis-expand-height puis-include-content-margin puis puis-v132n5e4faosf42v0eo3rf7vw9m s-latency-cf-section s-card-border">
            <div class="a-section a-spacing-base">
                <div class="s-product-image-container aok-relative s-text-center s-image-overlay-grey puis-image-overlay-grey s-padding-left-small s-padding-right-small puis-spacing-small s-height-equalized puis puis-v132n5e4faosf42v0eo3rf7vw9m"
                    style="padding-top: 0px !important;"><span data-component-type="s-product-image"
                        class="rush-component" data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                        data-render-id="r39yxwhps7ieji2l202kxrebvwq"><a class="a-link-normal s-no-outline"
                            target="_blank"
                            href="/OnePlus-Nord-Tempest-256GB-Storage/dp/B0C7VH46D6/ref=sr_1_54?qid=1689790964&amp;s=electronics&amp;sr=1-54">
                            <div class="a-section aok-relative s-image-square-aspect"><img class="s-image"
                                    src="https://m.media-amazon.com/images/I/71RtIeN2J4L._AC_UL400_.jpg"
                                    srcset="https://m.media-amazon.com/images/I/71RtIeN2J4L._AC_UL400_.jpg 1x, https://m.media-amazon.com/images/I/71RtIeN2J4L._AC_UL600_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/71RtIeN2J4L._AC_UL800_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/71RtIeN2J4L._AC_UL1000_FMwebp_QL65_.jpg 2.5x, https://m.media-amazon.com/images/I/71RtIeN2J4L._AC_UL1200_FMwebp_QL65_.jpg 3x"
                                    alt="OnePlus Nord 3 5G (Tempest Gray, 16GB RAM, 256GB Storage)"
                                    data-image-index="54" data-image-load="" data-image-latency="s-product-image"
                                    data-image-source-density="1"></div>
                        </a></span></div>
                <div class="a-section a-spacing-small puis-padding-left-small puis-padding-right-small">
                    <div class="a-section a-spacing-none a-spacing-top-small s-title-instructions-style">
                        <h2 class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"><a
                                class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/OnePlus-Nord-Tempest-256GB-Storage/dp/B0C7VH46D6/ref=sr_1_54?qid=1689790964&amp;s=electronics&amp;sr=1-54"><span
                                    class="a-size-base-plus a-color-base a-text-normal">OnePlus Nord 3 5G (Tempest
                                    Gray, 16GB RAM, 256GB Storage)</span> </a> </h2>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-small s-price-instructions-style">
                        <div class="a-row a-size-base a-color-base"><a
                                class="a-size-base a-link-normal s-no-hover s-underline-text s-underline-link-text s-link-style a-text-normal"
                                target="_blank"
                                href="/OnePlus-Nord-Tempest-256GB-Storage/dp/B0C7VH46D6/ref=sr_1_54?qid=1689790964&amp;s=electronics&amp;sr=1-54"><span
                                    class="a-price" data-a-size="xl" data-a-color="base"><span
                                        class="a-offscreen">₹37,999</span><span aria-hidden="true"><span
                                            class="a-price-symbol">₹</span><span
                                            class="a-price-whole">37,999</span></span></span> </a> </div>
                        <div class="a-row a-size-base a-color-secondary"><span class="a-color-secondary"><span
                                    data-component-type="s-truncate" class="rush-component"
                                    data-version-id="v132n5e4faosf42v0eo3rf7vw9m"
                                    data-render-id="r39yxwhps7ieji2l202kxrebvwq" data-component-id="69"><span
                                        class="a-truncate" data-a-word-break="normal" data-a-max-rows="1"
                                        data-a-overflow-marker="&amp;hellip;"
                                        style="line-height: 1.3em !important; max-height: 1.3em;"
                                        data-a-recalculate="false" data-a-updated="true"><span
                                            class="a-truncate-full a-offscreen">No Cost EMI available on select
                                            cards.</span><span class="a-truncate-cut" aria-hidden="true"
                                            style="height: auto;">No Cost EMI available on select
                                            cards.</span></span></span></span></div>
                    </div>
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                        <div class="a-row a-size-base a-color-secondary s-align-children-center">
                            <div class="a-row s-align-children-center"><span
                                    class="aok-inline-block s-image-logo-view"><span
                                        class="aok-relative s-icon-text-medium s-prime"><i
                                            class="a-icon a-icon-prime a-icon-medium" role="img"
                                            aria-label="Amazon Prime"></i></span><span></span></span> <span
                                    aria-label="Get it by Friday, 21 July"><span class="a-color-base">Get it by
                                    </span><span class="a-color-base a-text-bold">Friday, 21 July</span></span>
                            </div>
                            <div class="a-row"><span aria-label="FREE Delivery by Amazon"><span
                                        class="a-color-base">FREE Delivery by Amazon</span></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>







<div data-asin="" data-index="34"
class="a-section a-spacing-none s-result-item s-flex-full-width s-widget s-widget-spacing-large"
data-cel-widget="search_result_31">
<div data-uuid="b0af2aa2-6924-428a-baad-7c60e5ea1849" cel_widget_id="MAIN-PAGINATION-34"
    class="s-widget-container s-spacing-medium s-widget-container-height-medium celwidget slot=MAIN template=PAGINATION widgetId=pagination-button"
    data-csa-c-id="oepwve-ar3icj-9lr5np-5qnou0" data-cel-widget="MAIN-PAGINATION-34">
    <div class="a-section a-text-center s-pagination-container" role="navigation"><span
            class="s-pagination-strip"><a
                href="/s?i=electronics&amp;rh=n%3A1389432031&amp;fs=true&amp;qid=1689790964&amp;ref=sr_pg_2"
                aria-label="Go to previous page, page 1"
                class="s-pagination-item s-pagination-previous s-pagination-button s-pagination-separator"><svg
                    xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" focusable="false"
                    aria-hidden="true">
                    <path
                        d="M5.874.35a1.28 1.28 0 011.761 0 1.165 1.165 0 010 1.695L3.522 6l4.113 3.955a1.165 1.165 0 010 1.694 1.28 1.28 0 01-1.76 0L0 6 5.874.35z">
                    </path>
                </svg>Previous</a>
            <script>P.declare('s\-optimized\-pagination\-config', { "prefetchTargetIndex": 0, "enabled": true });</script>
            <a href="/s?i=electronics&amp;rh=n%3A1389432031&amp;fs=true&amp;qid=1689790964&amp;ref=sr_pg_1"
                aria-label="Go to page 1" class="s-pagination-item s-pagination-button">1</a><span
                class="s-pagination-item s-pagination-selected" aria-label="Current page, page 2">2</span><a
                href="/s?i=electronics&amp;rh=n%3A1389432031&amp;fs=true&amp;page=3&amp;qid=1689790964&amp;ref=sr_pg_3"
                aria-label="Go to page 3" class="s-pagination-item s-pagination-button">3</a><span
                class="s-pagination-item s-pagination-ellipsis" aria-hidden="true"><svg
                    xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" focusable="false"
                    aria-hidden="true">
                    <path
                        d="M9 2c-.608 0-1-.425-1-1s.392-1 1-1 1 .448 1 1c0 .575-.392 1-1 1zM5 2c-.608 0-1-.425-1-1s.392-1 1-1 1 .448 1 1c0 .575-.392 1-1 1zM1 2c-.608 0-1-.425-1-1s.392-1 1-1 1 .448 1 1c0 .575-.392 1-1 1z">
                    </path>...
                </svg></span><span class="s-pagination-item s-pagination-disabled" aria-disabled="true">369</span><a
                href="/s?i=electronics&amp;rh=n%3A1389432031&amp;fs=true&amp;page=3&amp;qid=1689790964&amp;ref=sr_pg_2"
                aria-label="Go to next page, page 3"
                class="s-pagination-item s-pagination-next s-pagination-button s-pagination-separator">Next<svg
                    xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" focusable="false"
                    aria-hidden="true">
                    <path
                        d="M2.126.35a1.28 1.28 0 00-1.761 0 1.165 1.165 0 000 1.695L4.478 6 .365 9.955a1.165 1.165 0 000 1.694 1.28 1.28 0 001.76 0L8 6 2.126.35z">
                    </path>
                </svg></a>
        </span></div>
</div>
</div>







<div data-asin="" data-index="35"
class="a-section a-spacing-none s-result-item s-flex-full-width s-widget s-widget-spacing-large"
data-cel-widget="search_result_32">
<div data-uuid="0e19bfbe-7e22-4457-b6c9-f6c6889a7e58" cel_widget_id="MAIN-FEEDBACK-35"
    class="s-widget-container s-spacing-medium s-widget-container-height-medium celwidget slot=MAIN template=FEEDBACK widgetId=feedback"
    data-csa-c-id="2lr0h3-g648gn-eo2f3u-qwx3ld" data-cel-widget="MAIN-FEEDBACK-35">

















    <div class="a-section a-spacing-medium a-spacing-top-medium">
        <div class="sg-row">
            <div class="sg-col-10-of-12 sg-col-10-of-20 sg-col sg-col-10-of-16 sg-col-10-of-24">
                <div class="sg-col-inner">

                    <div class="a-section a-spacing-small">
                        <div class="a-section a-spacing-none a-text-bold"><span
                                class="a-size-medium-plus a-color-base">Need help?</span></div>
                    </div>

                    <div class="a-row a-spacing-base a-size-base"><a
                            class="a-size-base a-color-base a-link-normal s-underline-text s-underline-link-text s-link-style"
                            href="/gp/help/customer/display.html?nodeId=201889520">Visit the help section</a> <span
                            class="a-size-base a-color-base"> or </span><a
                            class="a-size-base a-color-base a-link-normal s-underline-text s-underline-link-text s-link-style"
                            href="/gp/help/customer/contact-us">contact us</a> </div>
                </div>
            </div>
        </div>
    </div>

</div>
</div>





</div>`);

const $img = $(".a-section.aok-relative.s-image-square-aspect.s-image-square-aspect.s-image-square-aspect .s-image")
console.log($img);

for (let i = 0; i < $img.length; i++) {
    console.log($img[i].attribs.src);
}
