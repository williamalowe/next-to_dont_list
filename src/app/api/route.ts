import { NextResponse } from 'next/server'

import Dont from '@/models/Donts'
import dbConnect from '@/lib/db'

export const GET = async () => {
	await dbConnect()
	const data = await Dont.find()

	return NextResponse.json(data)
}