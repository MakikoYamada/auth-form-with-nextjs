import { z } from "zod";

export const signupFormSchema = z.object({
  username: z.string().min(3, { message: "ユーザー名は3文字以上で入力してください" }).max(30),
  email: z.string().email({ message: "メールアドレスの形式が正しくありません" }),
  password: z.string().min(6, { message: "パスワードは6文字以上で入力してください" }).max(30),
});

export const loginFormSchema = z.object({
  email: z.string().email({ message: "メールアドレスの形式が正しくありません" }),
  password: z.string().min(6, { message: "パスワードは6文字以上で入力してください" }).max(30),
});
