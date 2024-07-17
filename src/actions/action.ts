'use server'

import Dont from '@/models/Donts'

const addDont = async dont => {
	const task = dont.get('task')
	const frequency = dont.get('frequency')
	const score = 0
	// const score = dont.get('score')

	const newDont = new Dont({ task, frequency, score })
	await newDont.save()
}

const getDonts = async () => {
	return Dont.find()
}

export { getDonts, addDont }