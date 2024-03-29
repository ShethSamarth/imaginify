import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { clerkClient } from "@clerk/nextjs"
import { WebhookEvent } from "@clerk/nextjs/server"

import { createUser, deleteUser, updateUser } from "@/lib/actions/user.actions"

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = headers()
  const svix_id = headerPayload.get("svix-id")
  const svix_timestamp = headerPayload.get("svix-timestamp")
  const svix_signature = headerPayload.get("svix-signature")

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occured -- no svix headers", { status: 400 })
  }

  const evt: WebhookEvent = await req.json()

  // Get the type
  const eventType = evt.type

  // CREATE
  if (eventType === "user.created") {
    const { id, email_addresses, image_url, first_name, last_name, username } =
      evt.data

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username!,
      firstName: first_name,
      lastName: last_name,
      photo: image_url,
    }

    const newUser = await createUser(user)

    // Set public metadata
    if (newUser) {
      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id,
        },
      })
    }

    return NextResponse.json({ message: "OK", user: newUser })
  }

  // UPDATE
  if (eventType === "user.updated") {
    const { id, image_url, first_name, last_name, username } = evt.data

    const user = {
      firstName: first_name,
      lastName: last_name,
      username: username!,
      photo: image_url,
    }

    const updatedUser = await updateUser(id, user)

    return NextResponse.json({ message: "OK", user: updatedUser })
  }

  // DELETE
  if (eventType === "user.deleted") {
    const { id } = evt.data

    const deletedUser = await deleteUser(id!)

    return NextResponse.json({ message: "OK", user: deletedUser })
  }

  return new Response("", { status: 200 })
}
