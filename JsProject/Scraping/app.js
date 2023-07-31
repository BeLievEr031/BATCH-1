const axios = require("axios")
const cheerio = require("cheerio")

async function scrap() {
    try {

        const flipkart = await axios.get("https://www.flipkart.com/mobiles/pr?sid=tyy%2C4io&p%5B%5D=facets.brand%255B%255D%3DRealme&otracker=nmenu_sub_Electronics_0_Realme")
        const $ = cheerio.load(flipkart.data)
        const $img = $("._396cs4") //34
        console.log($img[0].attribs.src);
        // console.log($img[0]);
        const $name = $("._4rR01T") // 24
        const $price = $("._30jeq3._1_WHN1") //24
        const $spec = $("._1xgFaf") //24
        // console.log($name[0].children[0].data);
        const scrapedData = [];


        // for (let i = 0; i < $img.length; i++) {
        //     const mobileData = {
        //         name: "",
        //         specification: "",
        //         price: 0,
        //         img: ""
        //     }

        //     mobileData.price = $price[i].children[0].data
        //     mobileData.name = $name[i].children[0].data
        //     mobileData.img = $img[i].attribs.src

        //     scrapedData.push(mobileData)

        // }

        // console.log(scrapedData);

    } catch (error) {
        console.log(error);
    }
}

scrap();