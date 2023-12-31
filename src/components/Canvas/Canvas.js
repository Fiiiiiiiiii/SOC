"use client"

import React, { useEffect } from 'react';
import { gsap, Circ } from 'gsap';

// Kód je potřeba ještě upravit pro lepší optimalizaci

function Canvas() {
  useEffect(() => {
    let width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

    function shiftPoint(p) {
      gsap.to(p, {
        duration: 1 + Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: Circ.easeInOut,
        onComplete: function () {
          shiftPoint(p);
        },
      });
    }

    (function() {
    
        // Main
        initHeader();
        initAnimation();
        addListeners();
    
        function initHeader() {
            width = window.innerWidth;
            height = window.innerHeight;
            target = {x: width/2, y: height/2};
    
            largeHeader = document.getElementById('large-header');
            largeHeader.style.height = height+'px';
    
            canvas = document.getElementById('demo-canvas');
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext('2d');
    
            // vytvoření points
            points = [];
            for(var x = 0; x < width; x = x + width/20) {
                for(var y = 0; y < height; y = y + height/20) {
                    var px = x + Math.random()*width/20;
                    var py = y + Math.random()*height/20;
                    var p = {x: px, originX: px, y: py, originY: py };
                    points.push(p);
                }
            }
    
            // Pro každý point najde 5 nejbližších
            for(var i = 0; i < points.length; i++) {
                var closest = [];
                var p1 = points[i];
                for(var j = 0; j < points.length; j++) {
                    var p2 = points[j]
                    if(!(p1 == p2)) {
                        var placed = false;
                        for(var k = 0; k < 5; k++) {
                            if(!placed) {
                                if(closest[k] == undefined) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }
    
                        for(var k = 0; k < 5; k++) {
                            if(!placed) {
                                if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                    closest[k] = p2;
                                    placed = true;
                                }
                            }
                        }
                    }
                }
                p1.closest = closest;
            }
    
            // Pro každý point vytvoří kruh
            for(var i in points) {
                var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
                points[i].circle = c;
            }
        }
    
        // Eventy
        function addListeners() {
            if(!('ontouchstart' in window)) {
                window.addEventListener('mousemove', mouseMove);
            }
            window.addEventListener('scroll', scrollCheck);
            window.addEventListener('resize', resize);
        }
    
        function mouseMove(e) {
            var posx = 0;
            var posy = 0;
            if (e.pageX || e.pageY) {
                posx = e.pageX;
                posy = e.pageY - 120;
            }
            else if (e.clientX || e.clientY)    {
                posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            target.x = posx;
            target.y = posy;
        }
    
        function scrollCheck() {
            if(document.body.scrollTop > height) animateHeader = false;
            else animateHeader = true;
        }
    
        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            largeHeader.style.height = height+'px';
            canvas.width = width;
            canvas.height = height;
        }
    
        // animace
        function initAnimation() {
            animate();
            for(var i in points) {
                shiftPoint(points[i]);
            }
        }
    
        function animate() {
            if(animateHeader) {
                ctx.clearRect(0,0,width,height);
                for(var i in points) {
                    // detekuje pointy v rozmezí
                    if(Math.abs(getDistance(target, points[i])) < 4000) {
                        points[i].active = 0.3;
                        points[i].circle.active = 0.7;
                    } else if(Math.abs(getDistance(target, points[i])) < 10000) {
                        points[i].active = 0.1;
                        points[i].circle.active = 0.3;
                    } else if(Math.abs(getDistance(target, points[i])) < 15000) {
                        points[i].active = 0.08;
                        points[i].circle.active = 0.05;
                    } else {
                        points[i].active = 0.02;
                        points[i].circle.active = 0.1;
                    }
    
                    drawLines(points[i]);
                    points[i].circle.draw();
                }
            }
            requestAnimationFrame(animate);
        }
    
        function shiftPoint(p) {
            gsap.to(p, {
              duration: 1 + Math.random(),
              x: p.originX - 50 + Math.random() * 100,
              y: p.originY - 50 + Math.random() * 100,
              ease: Circ.easeInOut,
              onComplete: function () {
                shiftPoint(p);
              },
            });
          }
    
        // Canvas 
        function drawLines(p) {
            if(!p.active) return;
            for(var i in p.closest) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.closest[i].x, p.closest[i].y);
                ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
                ctx.stroke();
            }
        }
    
        function Circle(pos,rad,color) {
            var _this = this;
    
            // constructor
            (function() {
                _this.pos = pos || null;
                _this.radius = rad || null;
                _this.color = color || null;
            })();
    
            this.draw = function() {
                if(!_this.active) return;
                ctx.beginPath();
                ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
                ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
                ctx.fill();
            };
        }
    
        // Util
        function getDistance(p1, p2) {
            return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
        }
        
    })();

  }, []);

  return null;
}

export default Canvas;