var exercises = {
	'b1:1' : '<p>\n\
1. โปรแกรมนี้จะแสดงข้อความอะไรบนหน้าจอ\n\
 <pre class="code Python box">\n\
X = "I love you"\n\
print(X)\n\
 </pre>\n\
</p>\n',
		  
	'b1:2' : '<p>\n\
2. โปรแกรมนี้จะแสดงข้อความอะไรบนหน้าจอ\n\
 <pre class="code Python box">\n\
X = 3\n\
Y= 10\n\
Z = X + Y\n\
print(Z)\n\
 </pre>\n\
 </p>',
	
	'b1:3' : '<p>\n\
3.  โปรแกรมนี้จะแสดงข้อความอะไรบนหน้าจอ\n\
			  <pre class="code Python box">\n\
X = "The car turned"\n\
Y = " the corner."\n\
print(f"{X + Y}")\n\
</pre>\n\
</p>',

'b1:4':'<p>\n\
4. num_of_books ควรมีค่าเป็นอะไร\n\
<pre class="code Python box">\n\
num_of_books =\n\
print(f"I have read {num_of_books} yesterday.")\n\
</pre>\n\
</p>',

'b1:5' : '<p>\n\
			5. โปรแกรมนี้จะแสดงข้อความอะไรบ้างบนหน้าจอ\n\
			  <pre class="code Python box">\n\
s = "She opened the door."\n\
print(s[1])\n\
print(s[3:7ุ])\n\
print(s[2:])\n\
 </pre>\n\
 <p>',
 
 'b1:6' : '6. จงสร้าง List สำหรับเก็บรายชื่อของแต่ละวันในสัปดาห์ ', 
 
 'b1:7' : '7. จากคำตอบในข้อ 6 ชุดคำสั่งที่ใช้ลบรายการลำดับสุดท้ายคือ', 
 
 'b1:8': '8. จากคำตอบในข้อ 6 ชุดคำสั่งที่ใช้แสดงรายการตำแหน่งที่ 4 คือ',
 
 'b1:9' : '9. สมมุติว่านาย A ขายผลไม้ รายชื่อผลไมที่จำหน่ายอยู่มีดังนี้ Grapefruit,Banana, Apricot, Avocados,Bluebery, Jackfruit,Kiwi,Mango\n\
			จงสร้างตัวแปรที่ใช้เก็บรายชื่อผลไม้เหล่านี้ โดยใช้ Tuple',
			
 'b1:10' : '<p>\n\
			10. จากข้อ 9 ถ้ามีราคาขายต่อกิโลกรัมของผลไม้แต่ละรายการดังนี้<br/>\n\
					<table class="table is-bordered">\n\
						<thead>\n\
							<tr>\n\
								<th>ผลไม้</th>\n\
								<th>ราคาขาย (บาท/กิโลกรัม)</th>\n\
							</tr>\n\
						</thead>\n\
						<tbody>\n\
							<tr><td>Grapefruit</td><td>400</td></tr>\n\
							<tr><td>Banana </td><td> 100</td></tr> \n\
							<tr><td>Apricot </td><td> 350</td></tr> \n\
							<tr><td>Avocados </td><td> 200</td></tr>\n\
							<tr><td>Bluebery </td><td>1000</td></tr> \n\
							<tr><td>Jackfruitv</td><td>20</td></tr>\n\
							<tr><td>Kiwi </td><td> 1000</td></tr>\n\
							<tr><td>Mango </td><td> 65</td></tr>\n\
						</tbody>\n\
					</table><br/>\n\
			จงสร้างตัวแปร Tuple ที่ใช้เก็บรายชื่อผลไม้พร้อมราคาขาย\n\
			 </p> ',
 'b1:11' : '11. จากข้อมูลในข้อ 10 จงใช้ตัวแปรชนิด dictionary เพื่อใช้เก็บชื่อผลไม้และราคาขาย และเขียนชุดคำสั่งเพื่อแสดงราคาขายของ "Avocados"',
 // ------- operators  ----------------			
 'b1_operators:1' : '<p>\n\
			เขียนชุดคำสั่งตามลำดับที่กำหนดให้เพื่อคำนวณหาพื้อนที่สี่เหลี่ยมจตุรัส\n\
			<ol>\n\
				<li>กำหนดให้แต่ละด้านมีความยาว 5 หน่วย</li>\n\
				<li>พื้นที่ = ความยาวของด้าน x ความยาวของด้าน</li>\n\
			</ol>\n\
		</p>',
	'b1_operators:2':'<p>\n\
			จากรูป เราทราบว่า \( \angle AOB + \angle BOC = 180 \) จงแปลงข้อความนี้ให้เป็นชุดคำสั่ง\n\
			<div class="columns">\n\
				<div class="column image"><img src="./img/exercise_angle.png" /></div>\n\
				<div class="column"></div>\n\
				<div class="column"></div>\n\
			</div>\n\
		</p>',
		
	'b1_operators:4' : 'นาย A ไปตลาดซื้อปลามา 5 ตัว จ่ายเงินค่าปลาไปทั้งหมด 250 บาท จงเขียนชุดคำสั่งหาคำนวณหาราคาขายของปลาแต่ละตัว ',
	'':'4. นาย A หลังจากได้รับเงินเดือนแล้ว จ่ายค่าหนังสือไป 800 บาท ให้แม่ใช้ส่วนตัว 16% ของเงินเดือน และนำเงินบริจาคการกุศล 4% ของเงินเดือน แต่พ่อของนาย A\n\
			ได้รับเงินค่าจ้างเป็น 160% ของเงินที่นาย A จ่ายไปตามที่กล่าวมา ถ้านาย A ได้รับเงินเดือน 20,000 บาท จงเขียนชุดคำสั่งใช้คำนวณหาเงินค่าจ้าง\n\
			ของพ่อของนาย A',
			
	'b1_operators:5':'หนังสือจำนวน 110 เล่ม แบ่งได้ดังนี้\n\
			<ol>\n\
				<li>เป็นหนังสือเก่าจำนวน  20 % ที่เหลือเป็นหนังสือใหม่</li>\n\
				<li>10% ของหนังสือใหม่ และ 60% ของหนังสือเก่าเป็นหนังสือภาษาอังกฤษ ที่เหลือเป็นหนังสือภาษาไทย</li>\n\
			</ol>\n\
			เขียนชุดคำสั่งเพื่อคำนวณหาจำนวนหนังสือใหม่ หนังสือเก่า หนังสือภาษาไทย และหนังสือภาษาอังกฤษ',
			
	'b1_operators:6':'<p>เขียนชุดคำสั่งเพื่อหาเศษของ \( 15 \div 4 \) </p>',
	
	// ------- function  ----------------			
	'b1_func:3':'<p>\n\
            เขียน function เปลี่ยนค่ามุมจากหน่วย degree ไปเป็น radian เมื่อ 1 degree = 0.0174532925 radians\n\
                แล้วใช้ function เปลี่ยนค่ามุม 90 degree ให้เป็น radian \n\
        </p>',
        
    'b1_func:4' : 'สร้าง function แสดงข้อความทักทาย โดยรับค่าเป็น ชื่อคน และ ชื่อวัน เช่น  \"Sammy\",\"Tuesday\" แล้วแสดงข้อความว่า \"Good day Sammy, this is Tuesday\" ',
    
    'b1_func:5-5' : "สร้าง function เพื่อใช้คำนวณหาพื้นที่ของสี่เหลี่ยมจตุรัส เมื่อทราบความยาวของด้าน 1  ด้าน",
        
    'b1_func:6' :  'สร้าง function เพื่อใช้คำนวณหาผลรวมและผลต่างของจำนวน 2 จำนวน ',
      
    'b1_func:7' :  'โปรแกรนี้้จะแสดงผลอะไรบนหน้าจอ    <br/><pre class="code Python">\n\
def func(a,b):\n\
    return (a + 4,b + 5)\n\
\n\
x = 3\n\
y = 2\n\
print(func(x,y))\n\
</pre>',

      'b1_func:8': 'โปรแกรมนี้จะแสดงผลอะไรบนหน้าจอ<br/>\n\
			<pre class="code Python">\n\
def func(a,b=4):\n\
    return (a + 4,b + 5)\n\
\n\
x = 3\n\
y = 2\n\
print(func(x))\n\
			</pre>',
			
'b1_func:9':'โปรแกรมนี้จะแสดงผลอะไรบนหน้าจอ<br/>\n\
			<pre class="code Python">\n\
def outer_func(a,b):\n\
	def inner_func(c,d):\n\
		return c + d\n\
	return inner_func(b,a)\n\
\n\
x = 3\n\
y = 2\n\
result = outer_func(x,y)\n\
print(result)\n\
			</pre>',
			
'b1_func:10': 'ถ้้าต้องการให้มีการแสดงผลลัพธ์ตามที่แสดงไว้ ท่านจะเขียนชุดคำสังอย่างไร โดยใช้ function<br/>\n\
			<pre class="code Python">\n\
Input 1 = 14\n\
Inout 2 = 5\n\
Results are :\n\
Summation of 14 + 5 = 19\n\
Subtraction of 14 - 5 =  9\n\
			</pre>' ,
// ------- branching  ----------------			
	'b1_branch:6': 'ตารางที่กำหนดให้ เป็นการเทียบสัญญลักษณ์ตัวโน๊ตดนตรี (C4,D4,E4,F4,G4,A4,B4) กับ่ค่าความถี่เสียงในหน่วยของ Hz  จงสร้าง function ที่รับชือของตัวโน๊ด\n\
      เป็น input แล้วส่งค่าออกมาเป็นความถี่<br/>\n\
        <table class="table column">\n\
          <thead><tr><th>Note</th><th>Frequency(Hz)</th></tr></thead>\n\
          <tbody>\n\
            <tr><td>C4</td><td>261.63</td></tr>\n\
            <tr><td>D4</td><td>293.66</td></tr>\n\
            <tr><td>E4</td><td>329.63</td></tr>\n\
            <tr><td>F4</td><td>349.23</td></tr>\n\
            <tr><td>G4</td><td>392.00</td></tr>\n\
            <tr><td>A4</td><td>440.00</td></tr>\n\
            <tr><td>B4</td><td>493.88</td></tr>\n\
          </tbody>\n\
        </table>',
	'b1_branch:7': 'ในโรงงานผลิตสินค้าแห่งหนึ่ง มีระบบควบคุมอุญหภูมิเครื่องจักรไม่ให้สูงเกินไปจนเกิดความเสียหาย โดยต้องทำการวัดค่าอุญหภูมิเครื่องจักรทุก  10 นาที\n\
      และมีการแบ่งระดับการเตือนไว้ 3 ระดับ คือ\n\
      <ol>\n\
		<li>Green  คืออุญหภูมิไม่เกิน ึ70 degree Celsius</li>\n\
		<li>Orange คืออุญหภูมิไม่เกิน 90 ึdegree Celsius</li>\n\
		<li>Red คือ อุญหภูมิสูงเกว่า 90 ึdegree Celsius</li>\n\
      </ol>\n\
      จงเขียน function เพื่อใช้เป็นส่วนหนึ่งของระบบเตือนภัย โดยรับค่า input เป็นอุญหภูมิในหน่วย Celsious และ output เป็นข้อความสำหรับแจ้งเตือน',
	
	'b1_branch:81': 'อ้างอิงผลการศึกษาสมมุติการศึกษาหนึ่ง เพื่อหาความน่าจะเป็นที่ผู้ป่วยที่มีอาการ chest pain (เจ็บหน้าอก) จะป่วยเป็น Coronary Artory Diseases  (CAD) พิจารณาถ้อยคำที่กำหนดให้ แล้วแปลงให้เป็นชุดคำสั่งของภาษา Python<br/>\n\
	 "ถ้าผู้ป่วยมีอาการ chest pain และอายุไม่เกิน 56 ปี โอกาสที่จะเป็น CAD คือ 10%" ',
	
	'b1_branch:82': 'อ้างอิงผลการศึกษาสมมุติการศึกษาหนึ่ง เพื่อหาความน่าจะเป็นที่ผู้ป่วยที่มีอาการ chest pain (เจ็บหน้าอก) จะป่วยเป็น Coronary Artory Diseases  (CAD) พิจารณาถ้อยคำที่กำหนดให้ แล้วแปลงให้เป็นชุดคำสั่งของภาษา Python<br/>\n\
	"ถ้าผู้ป่วยมีอาการ chest pain และอายุเกิน 56 ปี โอกาสที่จะเป็น CAD คือ 46%"',
	
	'b1_branch:83': 'อ้างอิงผลการศึกษาสมมุติการศึกษาหนึ่ง เพื่อหาความน่าจะเป็นที่ผู้ป่วยที่มีอาการ chest pain (เจ็บหน้าอก) จะป่วยเป็น Coronary Artory Diseases  (CAD) พิจารณาถ้อยคำที่กำหนดให้ แล้วแปลงให้เป็นชุดคำสั่งของภาษา Python<br/>\n\
	"ถ้าผู้ป่วยมีอาการ chest pain อายุเกิน 56 ปี และเป็นเพศชาย โอกาสที่จะเป็น CAD คือ 66%"',
	
	'b1_branch:84': 'อ้างอิงผลการศึกษาสมมุติการศึกษาหนึ่ง เพื่อหาความน่าจะเป็นที่ผู้ป่วยที่มีอาการ chest pain (เจ็บหน้าอก) จะป่วยเป็น Coronary Artory Diseases  (CAD) พิจารณาถ้อยคำที่กำหนดให้ แล้วแปลงให้เป็นชุดคำสั่งของภาษา Python<br/>\n\
	"ถ้าผู้ป่วยมีอาการ chest pain อายุเกิน 56 ปี และเป็นเพศหญิง โอกาสที่จะเป็น CAD คือ 20%"',
	
	'b1_branch:9': 'นำข้อมูลและชุดคำสั่งที่ได้จากข้อก่อนหน้า มาเขียนเป็น function เพื่อใช้ในการคาดการณ์ความน่าจะเป็นที่ผู้ป่วยจะเป็น CAD โดย มีคุณสมบัติดังนี้\n\
       <div class="title is-5">Input :</div>\n\
       <ul>\n\
		   <li>age เป็น datatype แบบ integer</li>\n\
		   <li>gener เป็น datatype แบบ String มีค่าเป็น "male" หรือ "female"</li>\n\
       </ul>\n\
       <div><span class="title is-5">Output </span>: เป็น datatype แบบ float แทนค่าความน่าจะเป็นของการเป็น CAD</div>\n\
			<div class="columns">\n\
				<div class="column"></div>\n\
				<div class="column image">\n\
					<img src="/beingpythonman_1/img/CAD_function.png" />\n\
				</div>\n\
				<div class="column"></div>\n\
			</div>',
	'b1_branch:10': 'ใช้ function ที่ได้จากข้อก่อนหน้า เพื่อความน่าจะเป็นของคนไข้เพศหญิง อายุ 60 ปี จะเป็น CAD',
	/* ------- iteration  ----------------			*/
	'b1_iter:3':'เขียน for-loop เพื่อแสดงข้อความทักทายรายชือทุกใน list เช่น Hello Sammy\n\
			<pre class="code Python">\n\
van_halen = ["Eddy","Alex","Micheal","David","Sammy"]\n\
			</pre>',
	
	'b1_iter:4'	: 'เขียนชุดคำสั่งภาษา Python แสดงตัวอักษรทีละตัวในประโยค "I am Thai." บนหน้าจอ โดยใชั for-loop',
	
	'b1_iter:5'	: 'เขียนชุดคำสั่งภาษา Python เพื่อหาผลรวมของเลขจำนวนเต็มคู่ (even natural number) ่ที่อยู่ระหว่าง 0 - 20',
	
	'b1_iter:6'	: 'สร้างชุดคำสั่งภาษา Python เพื่อพิมพ์จำนวนนับ (natural number) ตั้งแต่ 100 ถึง 1 ',
	
	'b1_iter:7'	: 'สร้างชุดคำสั่งภาษา Python เพื่อพิมพ์ "Hello World" จำนวน 10 ครั้ง โดยใช้ while-loop',
	
	'b1_iter:81'	: 'ฝึกหัดการสร้าง while-loop\n\
			<blockquote>\n\
			There are many types of sentences, all with different structures and complexities.\n\
			</blockquote>\n\
			สร้างชุดคำสั่งภาษา  Python เพื่อใช้นับจำนวนตัวอักษร a ทั้งหมดที่มีในประโยคที่กำหนด',
			
	'b1_iter:82'	: 'ฝึกหัดการสร้าง while-loop\n\
			<blockquote>\n\
			There are many types of sentences, all with different structures and complexities.\n\
			</blockquote>\n\
			สร้างชุดคำสั่งภาษา  Python เพื่อใช้นับจำนวนตัวอักษร a  และ s ทั้งหมดที่มีในประโยคที่กำหนด',
	
	'b1_iter:9'	: 'สมมุติว่าร้านสะดวกซื้อแห่งหนึ่งมีรายการสินค้าบางอย่างที่ลดราคาลงเหลือ 40% ของราคาปรกติดังนี้<br/>\n\
               <table class="table">\n\
                 <thead>\n\
                   <tr><th>รายการ</th><th>ราคาปรกติ</th></tr>\n\
                 </thead>\n\
                 <tbody>\n\
                   <tr><td>Instant noodles</td><td>40</td></tr>\n\
                   <tr><td>Milk</td><td>50</td></tr>\n\
                   <tr><td>Orange juice</td><td>60</td></tr>\n\
                   <tr><td>Canned fish</td><td>30</td></tr>\n\
                 </tbody>\n\
               </table><br/>\n\สร้างชุดคำสั่งภาษา  Python เพื่อสร้างรายการสินค้าที่ปรับลดราคาแล้ว โดยใชัวิธีการ List comprehension ',
	
	'b1_iter:10'	: '	<img src="/icons/b1_iter_10.png" />',
	
	'b1_write_prog:1':'<p>\n\
				สมมุติมีเจ้าของร้านอาหารแ่ห่งหนึ่งต้องการโปรแกรมช่วยคำนวณจำนวนเงินรวมทั้งหมดที่ลูกค้าจะต้องจ่าย โดยที่ค่าใช้จ่ายประกอบไปด้วย\n\
				ค่าอาหาร ค่าภาษีมูลค่าเพิ่ม (VAT) ซึ่งคิดในอัตรา 7% ของค่าอาหาร และค่าบริการ (service charge) ซึ่งคิดในอัตรา 10 % จากค่าอาหาร\n\
				โดยโปรแกรมจะรับ input เป็นค่าอาหาร แล้วแสดงค่า 4 ค่าบนหน้าจอคือ \n\
					<ol>\n\
						<li>ค่าอาหาร </li>\n\
						<li>VAT </li>\n\
						<li>Service charge </li>\n\
						<li>จำนวนเงินที่ต้องจ่ายทั้งหมด </li>\n\
					</ol>\n\
					</p>',
}
