void setup()
{

     size(800,600);

 }

int levelsMin = 2;
    int levelsMax = 9;
    float initialLength = 100;

    float angleMin = PI/17;
    float angleMax = PI/10;

    int pointColor = color(27, 25, 9);

   void draw() {


        background(color(255,255,255,0.2));
        stroke(0,0, 0,50+mouseX/2);
        strokeWeight(10);

        float currentAngle = map (mouseX, 0, width, angleMin, angleMax); //mouse control of the branch angle
        int currentLevels = (int)map (mouseY, height,0, levelsMin, levelsMax); //mouse control of the generations count

        pushMatrix(); //save the world transformation matrix
        translate (width/2, height); //move the origin to the middle / bottom
       tree (currentLevels, initialLength, currentAngle); //draw first two branches - stems
        popMatrix(); //return to the world coordinate system
    }

    void tree (int levels, float length, float angle){
        if (levels>0){  //check if there are any levels left to render
            //destra
            pushMatrix();           //save current transformation matrix

            rotate (angle);         //rotate new matrix to make it point to the right
            line (0,0,0,-length);   //draw line "upwards"
            pushMatrix();           //save current (e.g. new) matrix
            translate(0,-length);   //move the origin to the branch end
            scale (0.95);          //scale down. fun fact - it scales down also the stroke weight!
            strokeWeight(levels);
           tree (levels-1, length, angle);  //call the recursive function again
            popMatrix();            //return to the matrix of the current line
            popMatrix();            //return to the original matrix
            //second branch - the same story
            pushMatrix();
            rotate (-angle/1.7);
            line (0,0,0,-length);
            pushMatrix();
            translate(0,-length);
            scale (0.95);
            strokeWeight(levels);
            tree (levels-1, length, angle);
            popMatrix();
            popMatrix();


        }
        if (levels==levelsMax);//draws flowers
        //drawFlowers();
    }
    void drawFlowers() { // draws flowers on branches

    //  println("flowers");
      noStroke();
      fill(#FFFF00);
      ellipse(0, 0, 0.4, 0.4);
      // draw 5 petals rotating after each one
      for (int i = 0; i < 5; i++) {
        fill(#FFB6C1);
        ellipse(0, -0.5, 0.4, 0.4);
        rotate(radians(72));
      }
    }