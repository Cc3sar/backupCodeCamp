import Url from './shortUrl.model';

const home = (req, res) => {
    res.sendFile(process.cwd() + '/views/index.html');
};

const shortUrl = async (req, res) => {
    try {
        let count = await Url.estimatedDocumentCount();
        var number = count + 1

        const newUrl = new Url({
            name: req.body.url,
            shortName: number
        });
    
        newUrl.save();

    } catch (error) {
        console.log(error);
    }
    res.json({ original_url : req.body.url});
};

const redirectUrl = async (req, res) => {
    try {
        const findUrl = await Url.findOne({ shortName: { $in: req.params.short_url } });
        if(!findUrl) return res.json({ error: "invalid url" });   

        res.redirect(findUrl.name);
    } catch (error) {
        console.log(error);
    }
};

export default {
    home,
    shortUrl,
    redirectUrl
};