import React from "react";

// imageSrc ve name öğelerini prop olarak geçirin
function Avatar(props) {
  return (
    <div className="group block p-8 flex-shrink-0">
      <div className="flex items-center">
        <div>
          <img
            className="inline-block h-12 w-12 rounded-full"
            src={props.imgSrc}
            alt=""
          />
        </div>
        <div className="ml-3">
          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
            {props.name}
          </p>
          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
            {props.profileText}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const imgURLTom =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  const userNameTom = "Tom Cook";

  const imgURLJohn =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  const userNameJohn = "John Cook";

  return (
    <div>
      <Avatar
        imgSrc={imgURLTom}
        name={userNameTom}
        profileText="Profile bakın"
      />
      <Avatar
        imgSrc={imgURLJohn}
        name={userNameJohn}
        profileText="Profile bakın"
      />
    </div>
  );
}
