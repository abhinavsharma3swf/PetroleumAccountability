import {render, screen} from "@testing-library/react";
import {expect} from "vitest";
import {UserLogin} from "../Components/UserLogin.tsx";
import {userEvent} from "@testing-library/user-event";


describe('User login page', () => {


    it('should display the user page with the login and heading', () => {
        render(<UserLogin onSubmit={()=>{}}/>);
        expect(screen.getByRole("heading", {name: /user login/i})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /login/i})).toBeInTheDocument();
    });

    it('should display the form on the page with user login and password input field', () => {
        render(<UserLogin onSubmit={()=>{}}/>);
        expect(screen.getByPlaceholderText("Username")).toBeVisible();
        expect(screen.getByPlaceholderText("Password")).toBeVisible();
    });

    it('should allow user to fill the username and password and click the submit button', async () => {
        const mockSubmit = vi.fn();
        const user = userEvent.setup();

        render(<UserLogin onSubmit={mockSubmit}/>);
        const userNameInput = screen.getByPlaceholderText(/username/i);
        const passwordInout = screen.getByPlaceholderText(/password/i);
        const submitButton = screen.getByRole("button", {name: /login/i});


        await user.type(userNameInput, "testUser");
        await user.type(passwordInout, "password");
        screen.logTestingPlaygroundURL();
        await user.click(submitButton);
        screen.logTestingPlaygroundURL();  //Adding the playground
        expect(mockSubmit).toHaveBeenCalledOnce();
        expect(mockSubmit).toHaveBeenLastCalledWith("testUser","password")
    });
});