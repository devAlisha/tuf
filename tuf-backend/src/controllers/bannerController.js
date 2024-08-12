import Banner from "../models/Banner.js";

export const getBanner = async (req, res) => {
  try {
    const banner = await Banner.findAll();
    console.log(banner);
    res.json(banner);
    if (!banner) return res.status(404).json({ error: "Banner not found" });
    res.json(banner);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateBanner = async (req, res) => {
  const { link, countdown, heading, description, isVisible, id } = req.body;
  console.log(req.body);
  try {
    const [banner, created] = await Banner.upsert({
      id,
      link,
      countdown,
      heading,
      description,
      isVisible,
    });

    res.status(created ? 201 : 200).json(banner);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
