import * as React from 'react';
import "./UserAddForm.scss";
import { useState } from 'react';

interface IUserAddFormProps {
    onAdd(name: string): void;
}

const UserAddForm: React.FunctionComponent<IUserAddFormProps> = ({ onAdd }: IUserAddFormProps) => {
    const [userName, setUserName] = useState("");
    const [formValid, setformValid] = useState(false);

    const addUser = () => {
        onAdd(userName);
        setUserName('');
    };

    const handleUserInput = (value: string) => {
        setUserName(value);
        setformValid(value.trim().length !== 0);
    }

    return (
        <div className="user-form">
            <input
                type="text"
                placeholder="Enter user name"
                value={userName}
                onChange={({
                    target: { value }
                }: React.ChangeEvent<HTMLInputElement>) => handleUserInput(value)}
            />
            <button className="btn btn-green" disabled={!formValid} onClick={addUser}>
                Add user
        </button>
        </div>
    );
};

export default UserAddForm;
