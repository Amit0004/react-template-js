import App from "./App";
import { render } from "./config/test-setup/test-utils";

describe("Tests for <App /> component", () => {
  test("should render the component properly", () => {
    const { getByText } = render(<App />);
    expect(getByText("Vite + React JS Template")).toBeInTheDocument();
  });
});
