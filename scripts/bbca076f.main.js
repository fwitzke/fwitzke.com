"use strict";var app=angular.module("witzke",[]);app.controller("ExperienceCtrl",["$scope","$http",function(a,b){a.experiences=[],b.get("experiences.json").success(function(b){a.experiences=b}),a.getClass=function(a){return a.avatar?"avatar "+a.avatar:"image "+a.image}}]),app.filter("metadata",function(){function a(a){var b=a.period;return b.start+" - "+b.end}return function(b){return a(b)+" | "+b.location}});