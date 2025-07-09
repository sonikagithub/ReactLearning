// ✅ Default Export Component
const DefExpAnExp = () => {
  return (
    <div>Hi, I am a default export. I am imported without curly brackets.</div>
  );
};

// ❌ This is not valid — you can only have ONE default export per file.
// Fix: Make this a named export
export function Rental() {
  return (
    <div>
      <h1>
        Hi, I am a named export. I must be imported using curly brackets. i am
        rental{" "}
      </h1>
    </div>
  );
}

export function Colors() {
  return (
    <div>
      <h1>
        Hi, I am a named export. I must be imported using curly brackets. I am
        colors
      </h1>
    </div>
  );
}

export function Profile() {
  return (
    <div>
      <h1>
        Hi, I am a named export. I must be imported using curly brackets. I am
        profile
      </h1>
    </div>
  );
}

export const TargetKey =
  "Hii I am target key you can also import the target key by export and use in import another page ";

export default DefExpAnExp;
