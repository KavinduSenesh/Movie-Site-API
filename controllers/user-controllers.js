const User = require("../models/user-models");

module.exports.getLikedMovies = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await await User.findOne({ email });
        if (user) {
            return res.json({ msg: "success", movies: user.likedMovies });
        } else return res.json({ msg: "User with given email not found." });
    } catch (error) {
        return res.json({ msg: "Error fetching movies." });
    }
};

module.exports.removeFromLikedMovies = async (req, res) => {
    try {
        const { email, movieId } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: "User not found." });
        }

        // Use $pull to remove only the movie with the given id
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { $pull: { likedMovies: { id: movieId } } },
            { new: true }
        );

        // If no movie was removed, updatedUser will still be truthy.
        // You might check if the likedMovies array length changed if needed.
        return res.json({ msg: "Movie successfully removed.", movies: updatedUser.likedMovies });
    } catch (error) {
        console.error("Error removing movie:", error);
        return res.status(500).json({ msg: "Error removing movie from liked list." });
    }
};



module.exports.addToLikedMovies = async (req, res) => {
    try {
        const { email, data } = req.body;
        const user = await await User.findOne({ email });
        if (user) {
            const { likedMovies } = user;
            const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
            if (!movieAlreadyLiked) {
                await User.findByIdAndUpdate(
                    user._id,
                    {
                        likedMovies: [...user.likedMovies, data],
                    },
                    { new: true }
                );
            } else return res.json({ msg: "Movie already added to the liked list." });
        } else await User.create({ email, likedMovies: [data] });
        return res.json({ msg: "Movie successfully added to liked list." });
    } catch (error) {
        return res.json({ msg: "Error adding movie to the liked list" });
    }
};
