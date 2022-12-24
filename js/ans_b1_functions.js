const answers = {
	3: '<pre class="code Python ">\n\
def degrees2radians(degree): \n\
    rad =  0.0174532925 * degree \n\
    return rad\n\
\n\
\n\
ang = 90 # degrees\n\
print( degrees2radians(ang))\n\
		</pre>',
	4: '<pre class="code Python ">\n\
def greeting(name,day):\n\
    print(f"Good day {name}, this is {day}")\n\
\n\
\n\
who = "Sammy"\n\
day = "Tuesday"\n\
print(greeting(who,day))\n\
</pre>',
	5: '<pre class="code Python ">\n\
def cube_area(side):\n\
    area = side ** 2\n\
    return area\n\
\n\
\n\
sid = 10 \n\
print(cube_area(side))\n\
</pre>',
	6: '<pre class="code Python">\n\
def func(x,y):\n\
    sum = x + y\n\
    dif = abs(x - y)\n\
    return {"sum":sum,"dif":dif}\n\
\n\
X = 10\n\
Y = 25\n\
print(func(X,Y))\n\
</pre>',
	7: '<pre class="code Python">\n\
(7,7)\n\
</pre>',
	8: '<pre class="code Python">\n\
(7,9)\n\
</pre>',
	9: '<pre class="code Python">\n\
5\n\
</pre>',
	10: '<pre class="code Python">\n\
def sub(a,b):\n\
	return a - b\n\
\n\
def sum(a,b):\n\
	return a + b\n\
\n\
input1 = 14\n\
input2 = 5\n\
print(f"Input 1 = {input1}")\n\
print(f"Input 2 = {input2}")\n\
print("Results are :")\n\
print(f"Summation of {input1} + {input2} = {sum(input1,input2)}")\n\
print(f"Subtraction of {input1} - {input2} =  {sub(input1,input2)}")\n\
</pre>'
	};
