"use client";
import { useRouter } from "next/navigation";

function Users({ users }) {
  const router = useRouter();

  return (
    <ul>
      {users.map((users) => (
        <li key={users.id}>
          onClick=
          {() => {
            router.push(`/users/${users.id}`);
          }}
          {() => {
            router.push("/users/${user.id}");
          }}
          <div>
            <h5>
              {users.id} {Users.first_name} {users.last_name}{" "}
            </h5>
            <p>{users.email}</p>
          </div>
          <img src={users.avatar} alt="{user.email}" />
        </li>
      ))}
    </ul>
  );
}

export default Users;
