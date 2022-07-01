import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

export default function TypedString() {
  const [ip, setIp] = useState("no ip ");

  let el = useRef(null);

  const getIp = async () => {
    const response = await fetch("https://api.ipify.org?format=json");
    const json = await response.json();
    setIp(json.ip);
  };
  useEffect(() => {
    getIp();
  }, []);
  useEffect(() => {
    const typedStrings = [
      `
    root@.~#cowsay your ip
   __${ip
     .split("")
     .map(() => "_")
     .join("")}
  / ${ip
    .split("")
    .map(() => " ")
    .join("")} \\
  | ${ip} |
  \\__${ip
    .split("")
    .map(() => "_")
    .join("")}/
     /
    /
  ^__^
  (oo)\\_____
  (__)\\     )\\/\\
      ||---||   
      ||   ||`,
    ];
    const options = {
      strings: typedStrings,
      typeSpeed: 20,
      smartBackspace: true, // this is a default
      loop: false,
      shuffle: false,
    };
    let typed = new Typed(el, { ...options });
    return () => typed.destroy();
  }, [ip]);
  return (
    <div className="text-green-300 p-2 bg-stone-900 rounded ">
      <pre ref={(e) => (el = e)} />
    </div>
  );
}

// import React from "react";
// import Typed from "typed.js";

// class TypedString extends React.Component {
//   componentDidMount() {
//     // If you want to pass more options as props, simply add
//     // your desired props to this destructuring assignment.
//     const { strings } = this.props;
//     // You can pass other options here, such as typing speed, back speed, etc.
//     const options = {
//       strings: strings,
//       typeSpeed: 30,
//       backSpeed: 30,
//       smartBackspace: true, // this is a default
//       loop: true,
//       shuffle: true,
//     };
//     // this.el refers to the <span> in the render() method
//     this.typed = new Typed(this.el, options);
//   }

//   componentWillUnmount() {
//     // Make sure to destroy Typed instance on unmounting
//     // to prevent memory leaks
//     this.typed.destroy();
//   }

//   render() {
//     return (
//       <span
//         // style={{ color: '#8C4A7B', whiteSpace: 'pre' }}
//         ref={(el) => {
//           this.el = el;
//         }}
//       />
//     );
//   }
// }
// export default TypedString;
