    //clayno
    if (foundSublist === "list1") {
        for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let r = random(195, 205);
            let g = random(155, 165);
            let b = random(110, 120);
            let a = random(230, 255);
            fill(r, g, b, a);
            noStroke();
            rect(x, y, 1, 1); 
        }
        }
        // Define colors for list1
        colors = [
            color(124, 63, 0, 200),
            color(99, 50, 0, 200),
            color(86, 43, 0, 200),
            color(73, 34, 1, 200),
            color(62, 28, 0, 200)
        ];
        //saga
    } else if (foundSublist === "list2") {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
              let r = random(215, 255); 
              let g = random(200, 215); 
              let b = random(235, 255); 
              let a = random(230, 255); 
              fill(r, g, b, a); 
              noStroke();
              rect(x, y, 1, 1); 
            }
        }
        colors = [
            color(106, 50, 159, 200),
            color(96, 31, 158, 200),
            color(82, 32, 129, 200),
            color(54, 15, 90, 200),
            color(28, 3, 51, 200)
        ];
        //degenape
    } else if (foundSublist === "list3") {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
              let r = random(195, 205); 
              let g = random(200, 210); 
              let b = random(220, 230); 
              let a = random(230, 255); 
              fill(r, g, b, a); 
              noStroke();
              rect(x, y, 1, 1); 
            }
        }
        colors = [
            color(3, 0, 46, 200),
            color(1, 0, 72, 200),
            color(1, 0, 87, 200),
            color(2, 0, 108, 200),
            color(9, 0, 136, 200)
        ]
        ;
        //fff
    } else if (foundSublist === "list4") {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
              let r = random(253, 255);
              let g = random(215, 220);
              let b = random(135, 145);
              let a = random(230, 255);
              fill(r, g, b, a);
              noStroke();
              rect(x, y, 1, 1); 
            }
          }
        colors = [
            color(240, 161, 80, 200),
            color(240, 149, 55, 200),
            color(244, 128, 32, 200),
            color(240, 117, 15, 200),
            color(199, 103, 6, 200)]
        ;
        //madlads
    } else if (foundSublist === "list5") {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
              let r = random(240, 255);
              let g = random(200, 210);
              let b = random(200, 210);
              let a = random(230, 255);
              fill(r, g, b, a);
              noStroke();
              rect(x, y, 1, 1);
            }
        }
        colors = [
            color(92, 16, 16, 200),
            color(111, 0, 0, 200),
            color(86, 13, 13, 200),
            color(195, 1, 1, 200),
            color(148, 0, 0, 200)
        ];
        //geckos
    } else if (foundSublist === "list6") {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
              let r = random(230, 240); 
              let g = random(240, 250); 
              let b = random(200, 210); 
              let a = random(230, 255); 
              fill(r, g, b, a); 
              noStroke();
              rect(x, y, 1, 1); 
            }
        }
        // Define colors for list6
        colors = [
            color(82, 177, 40, 200),
            color(77, 164, 29, 200),
            color(60, 142, 23, 200),
            color(48, 123, 28, 200),
            color(41, 106, 13, 200)
        ];
        //one
    } else if (foundSublist === "list7") {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
              let grey = random(30, 50); 
              fill(grey, grey, grey);
              noStroke();
              rect(x, y, 1, 1); 
            }
        }
        colors = [
            color(252, 252, 252, 200),
            color(255, 255, 255, 200),
            color(247, 247, 247, 200),
            color(243, 243, 243, 200),
            color(234, 234, 234, 200)
        ];
        //taiyo
    } else if (foundSublist === "list8") {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
              let r = random(255, 255); 
              let g = random(254, 254);
              let b = random(199, 202);
              let a = random(252, 255); 
              fill(r, g, b, a);
              noStroke();
              rect(x, y, 1, 1); 
            }
        }
        colors = [
            color(255,226,0, 200),
            color(250,220,0, 200),
            color(220,180,0, 200),
            color(147,130,0, 200),
            color(255,233,33, 170),
        ];
        //tensor
    } else if (foundSublist === "list9") {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
              let grey = random(200, 220); 
              let a = random(230, 255); 
              fill(grey, grey, grey, a); 
              noStroke();
              rect(x, y, 1, 1); 
            }
          }      
        colors = [
            color(77, 200),
            color(60, 200),
            color(30, 200),
            color(17, 200),
            color(0, 200)
        ];
        //multicolor
    } else {
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
              let r = random(252, 255);
              let g = random(254, 255);
              let b = random(253, 255);
              let a = random(250, 255);
              fill(r, g, b, a);
              noStroke();
              rect(x, y, 1, 1);
            }
        }
        colors = [
            color(164,182,221, 230),
            color(208,146,146, 230),
            color(192,148,204, 230),
            color(162,208,192, 230),
            color(195,120,146,230)
        ];
    }