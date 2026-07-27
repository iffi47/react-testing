import { render, screen } from "@testing-library/react";
import Greeting from "./Greetings";
import userEvent from "@testing-library/user-event";
describe('Greeting Component',() => {
  test('renders Hello world as a text',() =>{
    //Arrange
    render(<Greeting/>);
  
    //Act
    ///...nothing
  
    //Assert
    const helloWorldElement=screen.getByText('Hello World',{exact: false});
    expect(helloWorldElement).toBeInTheDocument();
  });
  test('renders good to see you if the button was NOT Clicked!',() => {
    render(<Greeting/>);

    const outputElement= screen.getByText('good to see you',{exact: false});
    expect(outputElement).toBeInTheDocument();
  });

  test('renders change I button was Clicked!',async() => {
    //Arrange
    render(<Greeting/>);

    //Act
    const buttonElement = screen.getByRole('button');
    await userEvent.click(buttonElement);

    //Assert

    const helloWorldElement = screen.getByText("Changed!");
    expect(helloWorldElement).toBeInTheDocument();
  });
});
