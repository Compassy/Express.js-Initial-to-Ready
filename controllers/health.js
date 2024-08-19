exports.get_health = (req, res) => {
    res.status(200).json({ message: 'Server is running' });
}