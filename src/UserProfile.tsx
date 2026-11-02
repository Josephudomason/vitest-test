import { useState } from "react"
import { useEffect } from "react";

interface UserData {
  name: string;
  email: string;
}

const UserProfile = ({ userId }: { userId: number }) => {
  const [user, setUser] = useState<UserData | null>(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then((data) => setUser(data));
  }, [userId]);
  if (!user) return <p className="text-center mt-10">Loading.......</p>
  return (
    <div>
      {user?.name ? (
        <div className="flex-col text-center mt-10">
          <p className="text-2xl text-nowrap font-medium">{user.name}</p>
          <p>{user.email}</p>
        </div>
      ) : null}
    </div>
  )
}

export default UserProfile