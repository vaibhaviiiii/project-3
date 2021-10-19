package com.Book.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Book.demo.entity.Books;
 
public interface RepositoryIntf extends JpaRepository<Books,Integer>{

}
