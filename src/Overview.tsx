// type OverviewProps = FormData;

type OverviewData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

type OverviewProps = OverviewData & {
  updateFields: (fields: Partial<OverviewData>) => void;
};

export function Overview({
  firstName,
  lastName,
  age,
  street,
  city,
  state,
  zip,
  email,
  password,
}: OverviewProps) {
  return (
    <div>
      <h2>Overview</h2>
      <p>
        <strong>First Name:</strong> {firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {lastName}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Street:</strong> {street}
      </p>
      <p>
        <strong>City:</strong> {city}
      </p>
      <p>
        <strong>State:</strong> {state}
      </p>
      <p>
        <strong>Zip:</strong> {zip}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Password:</strong> {password}
      </p>
    </div>
  );
}
