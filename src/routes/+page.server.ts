import { client } from '$lib/server/prisma';
import { Prisma } from '@prisma/client';
import { fail, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	join: async ({ request }) => {
		const form = await request.formData();

		const name = form.get('name')?.toString();
		const email = form.get('email')?.toString();
		const phone = form.get('phone')?.toString();
		const agree = form.get('agree');

		console.log(name, email, phone, agree);
		if (!name || !email) {
			return fail(422, { error: 'Name and email are required' });
		}

		if (!agree) {
			return fail(422, { error: 'You must agree to the terms and conditions' });
		}

		try {
			await client.subscriber.create({
				data: {
					name,
					email,
					phone
				}
			});
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				return fail(500, { error: 'Something went wrong' });
			}
		}
	}
};
