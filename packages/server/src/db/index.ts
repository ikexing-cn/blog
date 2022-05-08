import mongoose from 'mongoose'

export async function dbInit() {
    await mongoose.connect('mongodb://localhost:27016/blog')
}
