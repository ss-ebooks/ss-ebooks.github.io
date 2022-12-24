const answers = {		
	3: '<pre class="code Python">\n\
van_halen = ["Eddy","Alex","Micheal","David","Sammy"]\n\
for name in van_halen :\n\
	print(f"Hello {name}")\n\
		</pre>',
		
	4: '<pre class="code Python">\n\
for c in "I am Thai.":\n\
	print(c)\n\
		</pre>',
	5 : '\n\
<pre class="code Python">\n\
even_sum = 0\n\
for x in range(0,21,2) :\n\
	even_sum = even_sum + x\n\
print(even_sum)\n\
</pre>\n',
	6 : '\n\
<pre class="code Python">\n\
for n in range(100,0,-1) :\n\
	print(n)\n\
</pre>',
	7 : '\n\
<pre class="code Python">\n\
n = 0\n\
while n < 5:\n\
	print("Hello World")\n\
	n = n + 1\n\
</pre>',

	81 : '\n\
<pre class="code Python">\n\
st = "There are many types of sentences, all with different structures and complexities."\n\
# start position at 0\n\
i = 0\n\
\n\
# number of is 0\n\
num_a = 0\n\
\n\
# assign first character to c\n\
c = st[i]\n\
\n\
while c != ".":\n\
	if c == "a": # condition check\n\
		num_a += 1 # increase number of "a"\n\
	i+=1 # increase index number\n\
	c = st[i] # step to another character.\n\
print(num_a)\n\
</pre>',
	82 : '\n\
<pre class="code Python">\n\
st = "There are many types of sentences, all with different structures and complexities."\n\
# start position at 0\n\
i = 0\n\
\n\
num_a = 0\n\
num_s = 0\n\
\n\
# assign first character to c\n\
c = st[i]\n\
\n\
while c != ".":\n\
	if c == "a": # condition check\n\
		num_a += 1 # increase number of "a"\n\
	elif c == "s":\n\
		num_s += 1 # increase number of "s"\n\
	i+=1 # increase index number\n\
	c = st[i] # step to another character.\n\
print(f"Number of a is {num_a}")\n\
print(f"Number of s is {num_s}")\n\
</pre>\n',	
	9 : '\n\
<pre class="code Python">\n\
# create lookup table price list before sale\n\
price_list = [("Instant noodles",40),("Milk",50),("Orange juice",60),("Canned fish",30)]\n\
\n\
# create lookup table price list for sale\n\
new_price_list = [ (x[0],x[1] * 0.4) for x in price_list]\n\
print(new_price_list)\n\
</pre>',
10 : '\n\
<pre class="code Python">\n\
def GPA (subj_grades) :\n\
	numerator = 0\n\
	denominator = 0\n\
	for sg  in subj_grades:\n\
		numerator =  numerator + sg["credit"]*sg["grade"]\n\
		denominator = denominator + sg["credit"]\n\
	return numerator/denominator\n\
\n\
a = [{"credit":3,"grade":2.0},{"credit":3,"grade":4.0}]\n\
b = [{"credit":3,"grade":4.0},{"credit":3,"grade":3.0}]\n\
print(GPA(a))\n\
print(GPA(b))\n\
</pre>',
};
