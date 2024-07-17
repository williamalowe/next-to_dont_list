import mongoose from 'mongoose'

const dontSchema = new mongoose.Schema({
	task: {
		type: String,
		required: true,
	},
	frequency: {
		type: String,
		required: true,
	},
	score: {
		type: Number,
		required: true,
	},
})

export default mongoose.models.Dont || mongoose.model('Dont', dontSchema)