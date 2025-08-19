import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function AuthView() {
  return (
    <div className="h-screen flex">
      <div className="flex-1 bg-[url('auth-bg.jpg')] bg-cover bg-center rounded-3xl m-2 hidden md:flex"></div>
      <div className="flex-1 bg-white flex flex-col justify-center items-center">
        <Label>Email</Label>
        <Input placeholder="Email" type="email" />

        <Label>Password</Label>
        <Input placeholder="Password" type="password" />
      </div>
    </div>
  );
}

export default AuthView;
