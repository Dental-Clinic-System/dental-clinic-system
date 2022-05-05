import { createContext, useState, FC } from "react";

interface PatientContextInterface {
    contextPatient?: any;
    setContextPatient?: any;
}

export const PatientContext = createContext<PatientContextInterface>(
    {} as PatientContextInterface
);

export const PatientProvider: FC = (props) => {
    const { children } = props;
    const [contextPatient, setContextPatient] = useState({ });

    return (
        <PatientContext.Provider value={{ contextPatient, setContextPatient }}>
            {children}
        </PatientContext.Provider>
    );
};
