package com.learn.hib.controller;

import java.util.List;
import java.util.UUID;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.learn.hib.entity.Loan;

@RestController
public class LoanController {

    @Autowired
    private SessionFactory sessionFactory;

    @SuppressWarnings("unchecked")
    @RequestMapping(method = RequestMethod.POST, path = "/loan")
    public ResponseEntity<String> saveLoan() {

        ResponseEntity<String> response = null;
        Session session = this.sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        String num = UUID.randomUUID().toString();
        session.persist(new Loan(num, num.getBytes()));
        tx.commit();
        List<Loan> list = session.createQuery("from loan").list();
        session.close();
        response = new ResponseEntity<>("Num:" + num + ":loans:" + list.toString(), HttpStatus.OK);
        return response;
    }
}
