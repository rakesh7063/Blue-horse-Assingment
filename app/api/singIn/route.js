import DbConnect from "@/lib/config/db";
import User from "@/lib/model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"; 

// signIn

export async function POST(req) {
    await DbConnect();
    try {
        const inputData = await req.json();
        const { email, password } = inputData;

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({
                msg: "Email not found",
                status: false,
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({
                msg: "Invalid credentials",
                status: false,
            });
        }

        return NextResponse.json({
            msg: "Login successful",
            status: true,
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            msg: "An error occurred",
            status: false,
        });
    }
}
