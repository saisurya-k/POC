package com.learn.hib.entity;

import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.ColumnTransformer;

@Entity(name = "loan")
public class Loan {

    @Id
    @Column(name = "loan_number")
    private String loanNumber;

    @Column(name = "borrower_ssn")
    @ColumnTransformer(forColumn = "borrower_ssn", read = "pgp_sym_decrypt(borrower_ssn, 'Abcd#1234')", write = "pgp_sym_encrypt(?, 'Abcd#1234')")
    private byte[] borrowerSSN;

    public Loan(String loanNumber, byte[] borrowerSSN) {
        super();
        this.loanNumber = loanNumber;
        this.borrowerSSN = borrowerSSN;
    }

    public String getLoanNumber() {

        return loanNumber;
    }

    public void setLoanNumber(String loanNumber) {

        this.loanNumber = loanNumber;
    }

    public byte[] getBorrowerSSN() {

        return borrowerSSN;
    }

    public void setBorrowerSSN(byte[] borrowerSSN) {

        this.borrowerSSN = borrowerSSN;
    }

    @Override
    public String toString() {

        return "Loan [loanNumber=" + loanNumber + ", borrowerSSN=" + Arrays.toString(borrowerSSN) + "]";
    }

}
