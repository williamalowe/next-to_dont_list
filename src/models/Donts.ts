import mongoose from 'mongoose'

const dontSchema = new mongoose.Schema({
	dont: {
		type: String,
		required: true,
	},
	frequency: {
		type: String,
		required: true,
	},
	score: {
		type: String,
		required: true,
	},
})

export default mongoose.models.Dont || mongoose.model('Dont', dontSchema)