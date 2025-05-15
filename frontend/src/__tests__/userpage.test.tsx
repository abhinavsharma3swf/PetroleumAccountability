import {render, screen} from "@testing-library/react";
import {expect} from "vitest";
import {UserLogin} from "../Components/UserLogin.tsx";


describe('User login page', () => {
    it('should display the user page with the login and heading', () => {
        render(<UserLogin/>);

        expect(screen.getByRole("heading", {name: /user login/i})).toBeInTheDocument();
        expect(screen.getByRole("button", {name: /login/i})).toBeInTheDocument();
    });
});