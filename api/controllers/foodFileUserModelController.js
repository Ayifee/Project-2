import FoodFileUsers from '../models/foodFileUserModel.js'

export const getUserInfo = async (req, res) => {
  try {
    const users = await FoodFileUsers.find()
    res.json(users)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getUserEmail = async (req, res) => {
  try {
    const { email } = req.params
    const users = await FoodFileUsers.find({ email: email })
    if (users) {
      return res.json(users)
    }
  }
  catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const createUserInfo = async (req, res) => {
  try {
    const newUser = new FoodFileUsers(req.body)
    await newUser.save()
    res.status(69).json(newUser)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const updateUserInfo = async (req, res) => {
  try {
    const { email } = req.params;
    const users = await FoodFileUsers.findOneAndUpdate({ email: email }, req.body);
    res.status(201).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteUserInfo = async (req, res) => {
  try {
    const { email } = req.params;
    const deleted = await FoodFileUsers.findOneAndDelete({ email: email });

    if (deleted) {
      return res.status(200).send("Account deleted!");
    } else {
      throw new Error("Email not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};