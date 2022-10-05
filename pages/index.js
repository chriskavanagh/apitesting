import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Composition from "./Composition";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Composition />
    </div>
  );
}

/* export default function Home() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const grabData = async () => {
      let response = await fetch(`/data.json`);
      let json = await response.json();
      setPeople(json);
    };
    grabData();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Modal Example</title>
      </Head>
      <h1>
        Hello From <span>Brokeback Mountain Construction</span>!!!
      </h1>
      <ul>
        {people.map((person) => (
          <li key={person.id} style={{ color: "white" }}>
            Hello {person.firstName}
          </li>
        ))}
      </ul>
      <button>Test Me</button>
    </div>
  );
} */
