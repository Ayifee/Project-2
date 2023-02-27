import userReview from 'api/json/foodFileEntry.json'

export const getUserInfo = async (req, res) => {
  try {
    const reviews = await userReview.find()
    res.json(reviews)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const getUserEmailReview = async (req, res) => {
  try {
    const { email } = req.params
    const reviews = await userReview.find({ email: email })
    if (reviews) {
      return res.json(reviews)
    }
  }
  catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const createReview = async (req, res) => {
  try {
    const newReview = new userReview(req.body)
    await newReview.save()
    res.status(201).json(newReview)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const updateReview = async (req, res) => {
  try {
    const { email } = req.params
    const reviews = await userReview.findOneAndUpdate({ email: email }, req.body)
    res.status(201).json(reviews)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const deleteReview = async (req, res) => {
  try {
    const { email } = req.params
    const deleted = await userReview.findOneAndDelete({ email: email })

    if (deleted) {
      return res.status(200).send('Account deleted!')
    } else {
      throw new Error('Email not found')
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}