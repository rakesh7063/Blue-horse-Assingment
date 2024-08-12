import DbConnect from "@/lib/config/db";
import User from "@/lib/model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"; 

// signUp

export async function POST(req) {
    await DbConnect();
    try {
        const inputUser = await req.json();
        const { email, password, ...rest } = inputUser;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({
                msg: "User already registered",
                status: false,
            });
        }

    
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user with hashed password
        const newUser = await User.create({ email, password: hashedPassword, ...rest });

        return NextResponse.json({
            msg: "Register successful",
            status: true,
            data: newUser,
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            msg: "An error occurred during registration",
            status: false,
        });
    }
}
