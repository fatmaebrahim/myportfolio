import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import boots from "../assets/bootstrap.png";
import js from "../assets/javascript.png";
import go from "../assets/go.png";
import django from "../assets/django.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/expressjs.png";
import mongodb from "../assets/mongo.png";
import mysql from "../assets/mysql.png";
import selenium from "../assets/selenium.png";
import swagger from "../assets/swagger.png";
import nextjs from "../assets/nextjs.png";
import vue from "../assets/vue.png";
import docker from "../assets/docker.png";
import kubernetes from "../assets/kubernetes.png";
import helm from "../assets/helm.png";
import postman from "../assets/postman.png";
import postgresql from "../assets/postgresql.png";
import git from "../assets/git.png";


const Skills = () => {
  return (
    <div
      name="skills"
      className=" pt-[1500px] h-screen w-full bg-[#1E2233] flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl text-center font-semibold text-[#FF6969] ">
        Here are the tools I've worked with
      </h1>

      {/* Frontend Skills */}
      <div>
        <h2 className="text-2xl text-center font-semibold text-[#FF6969] pt-14">
          Frontend Tools
        </h2>
        <div className="scale-75 md:scale-100 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={html} alt="html" /> HTML
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={css} alt="css" /> CSS
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={js} alt="js" /> JavaScript
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={react} alt="react" /> React
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={vue} alt="vue" /> Vue
          </div>
          <div className="relative w-[150px] h-[178px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500 flex justify-center items-center z-1">
            <div className="w-[120px] h-[120px] rounded-full bg-white z-2 absolute"></div>
            <img
              className="w-[200px] z-2 absolute top-0"
              src={nextjs}
              alt="nextjs"
            />
            <div className="text-center text-xl font-semibold absolute bottom-0">
             Next.JS
            </div>
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={tailwind} alt="tailwind" /> Tailwind
          </div>
          <div className="relative w-[150px] h-[178px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500 flex justify-center items-center z-1">
            <div className="w-[100px] h-[120px] bg-white z-2 absolute"></div>
            <img
              className="w-[200px] z-2 absolute top-0"
              src={boots}
              alt="bootstrap"
            />
            <div className="text-center text-xl font-semibold absolute bottom-0">
              Bootstrap
            </div>
          </div>
 
        
        </div>
      </div>

      {/* Backend Skills */}
      <div>
        <h2 className="text-2xl text-center font-semibold text-[#FF6969] pt-14">
          Backend Tools
        </h2>
        <div className="scale-75 md:scale-100 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={go} alt="go" /> Go
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={django} alt="django" /> Django
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={nodejs} alt="nodejs" /> Node.js
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={express} alt="express" /> Express.js
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={mongodb} alt="mongodb" /> MongoDB
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={mysql} alt="mysql" /> MySQL
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={postgresql} alt="postgresql" /> PostgreSQL
          </div>
        </div>
      </div>

      {/* Software Tools */}
      <div>
        <h2 className="text-2xl text-center font-semibold text-[#FF6969] pt-14">
          Software Tools
        </h2>
        <div className="scale-75 md:scale-100 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={git} alt="git" /> Git
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={docker} alt="docker" /> Docker
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={kubernetes} alt="kubernetes" />{" "}
            Kubernetes
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={helm} alt="helm" /> Helm Chat
          </div>
         
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={selenium} alt="selenium" /> Selenium
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={postman} alt="postman" /> Postman
          </div>
          <div className="w-[150px] m-4 shadow-lg shadow-black rounded-lg text-center text-xl font-semibold hover:scale-110 duration-500">
            <img className="w-[200px]" src={swagger} alt="swagger" /> Swagger
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
