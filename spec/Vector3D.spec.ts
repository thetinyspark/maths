import { Vector3D } from "../lib/Vector3D";
import { findAngleInTriangle, Point, RAD_TO_DEG } from "../lib";

/*
* MIT License

* Copyright (c) 2019 The Tiny Spark

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:

* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.

* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.

* @author The Tiny Spark
*/

describe('test Vector3D class', () => {

    let vector1: Vector3D = null;
    let vector2: Vector3D = null;
    beforeEach(() => {
        vector1 = new Vector3D(0, 0, 1);
        vector2 = new Vector3D(1, 0, 0);
    });

    it(
        "should have a 'x' property set to 0",
        () => {
            expect(vector1.x).toBe(0);
        }
    );

    it(
        "should have a 'y' property set to 0",
        () => {
            expect(vector1.y).toBe(0);
        }
    );

    
    it(
        "should have a 'z' property set to 1",
        () => {
            expect(vector1.z).toBe(1);
        }
    );

    
    it(
        "should have a 'w' property set to 1",
        () => {
            expect(vector1.w).toBe(1);
        }
    );

    it(
        "should calculate the cross product of two vectors ( normal vector )",
        () => {
            let result:Vector3D = vector1.crossProduct(vector2);
            expect(result.x).toBe(0);
            expect(result.y).toBe(1);
            expect(result.z).toBe(0);
            expect(result.w).toBe(1);

            let angle:number = findAngleInTriangle(
                new Point(0,0), 
                new Point(vector2.x, vector2.y),
                new Point(result.x, result.y)
            ) * RAD_TO_DEG;

            expect( Math.round(angle)).toBe(90);
        }
    );

    it(
        "should calculate the length of the vector",
        () => {
            vector1.x = vector1.y = vector1.z = 0;
            expect(vector1.getLength()).toBe(1);
        }
    );

    
    it(
        "should normalize the vector",
        () => {
            vector1.x = vector1.y = vector1.z = 3;
            vector1.normalize();
            expect(vector1.getLength()).toBe(1);
        }
    );
});