const answers = {		
	6: '<pre class="code Python">\n\
def note_2_freq(note):\n\
	fre = None\n\
	if note == "C4":\n\
		fre = 261.63\n\
	elif note == "D4"\n\
		fre = 293.66 \n\
	elif note == "E4"\n\
		fre = 329.63\n\
	elif note == "F4"\n\
		fre = 349.23\n\
	elif note == "G4"\n\
		fre = 392.00\n\
	elif note == "A4"\n\
		fre = 440.00\n\
	elif note == "B4"\n\
		fre = 493.88 \n\
	return fre\n\
\n\
print(note_2_freq("C4")\n\
print(note_2_freq("E4")\n\
		</pre>',
		
	7: '<pre class="code Python">\n\
def temp_alert(c):\n\
	if c < 70 :\n\
		return "Normal"\n\
	elif c < 90 :\n\
		return "Orange"\n\
	else :\n\
		return "Red"\n\
\n\
t1 = 45\n\
t2 = 89\n\
t3 = 120 \n\
print(temp_alert(t1))\n\
print(temp_alert(t2))\n\
print(temp_alert(t3))\n\
		</pre>',
	81 : '\n\
<pre class="code Python">\n\
if chest_pain == True :\n\
	prob_CAD = 0.28\n\
</pre>\n',
	82 : '\n\
<pre class="code Python">\n\
if chest_pain == True and age <= 56 :\n\
	prob_CAD = 0.10\n\
</pre>\n\
or\n\
<pre class="code Python">\n\
	if chest_pain == True :\n\
		if  age <= 56 :\n\
			prob_CAD = 0.10\n\
</pre>',
	83 : '\n\
<pre class="code Python">\n\
if chest_pain == True and age > 56 :\n\
	prob_CAD = 0.46\n\
</pre>\n\
or\n\
<pre class="code Python">\n\
if chest_pain == True :\n\
   if age > 56 :\n\
		prob_CAD = 0.46\n\
</pre>',
	84 : '\n\
<pre class="code Python">\n\
if (chest_pain == True) and (age > 56) and (gender == "male") :\n\
	prob_CAD = 0.66\n\
</pre>\n\
or\n\
<pre class="code Python">\n\
if chest_pain == True :\n\
	if age <= 56 :\n\
		prob_CAD = 0.66\n\</pre>\n\
</pre>\n',	
	85 : '\n\
<pre class="code Python">\n\
if (chest_pain == True) and (age <= 56) and (gender == "female") :\n\
	prob_CAD = 0.20\n\</pre>\n\
</pre>\n\
or\n\
<pre class="code Python">\n\
if chest_pain == True :\n\
	if age <= 56 :\n\
		if gender == "female" :\n\
			prob_CAD = 0.20\n\</pre>\n\
</pre>\n',
	9 : '\n\
<pre class="code Python">\n\
def cad_diag(age,gender):\n\
	cad = 0.0\n\
	if age > 56 :\n\
		if gender == "male":\n\
			cad = 0.66\n\
		elif gender == "female":\n\
			cad = 0.20\n\
	else:\n\
		cad = 0.10\n\
	return cad\n\
',
};
