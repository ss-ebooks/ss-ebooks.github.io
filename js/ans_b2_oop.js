	const ex_content = {1: 
'class JediMaster() :\n\
    def __init__(self):\n\
        self.power_level = 0 \n\
\n\
    def set_power(self,v):\n\
        self.power_level = v\n\
\n\
    def get_power(self):\n\
        return self.power_level\n\
# create an instance of JediMaster\n\
yoda = JediMaster()\n\
\n\
# set power level to 100\n\
yoda.set_power(100)\n\
\n\
# show up\n\
print(yoda.get_power())\n\
\n\
# fault update with direct access to attribute\n\
yoda.power_level = 500\n\
\n\
 ',

2:
'class JediMaster() :  \n\
    def __init__(self):\n\
        self.__power_level = 0\n\
\n\
    def set_power(self,v):\n\
        self.__power_level = v\n\
\n\
    def get_power(self):\n\
        return self.__power_level\n\
\n\
# create an instance of JediMaster\n\
yoda = JediMaster()\n\
\n\
# try to access private member directly\n\
yoda.power_level = 500\n\
\n\
# show up\n\
print(yoda.get_power())\n\
\n\
# access private attribute via public method\n\
\n\
yoda.set_power(500)\n\
print(yoda.get_power())\n',
3:'\
class JediMaster() :\n\
    def __init__(self):\n\
         self.__power_level = 0\n\
\n\
    def __set_power(self,v):\n\
        self.__power_level = v\n\
\n\
    def get_power(self):\n\
        return self.__power_level\n\
\n\
yoda = JediMaster()\n\
\n\
# try to access private method\n\
yoda.__set_power(500)\n\
# try to access private method with name mangling\n\
yoda._JediMaster__set_power(500)\n\
\n\
#print out\n\
print(yoda.get_power())\n\
',
4:'\
class Employee :\n\
    def __init__(self,name):\n\
        self.name = name\n\
\n\
    def get_payment(self,base_salary):\n\
        total_payment = base_salary\n\
        return total_payment\n\
\n\
class Accountant(Employee):\n\
    def get_payment(self,base_salary,ot):\n\
        total_payment = base_salary + ot\n\
        return total_payment\n\
\n\
class Sales(Employee):\n\
    def get_payment(self,base_salary,incentives,travel_expense):\n\
    total_payment = base_salary + incentives + travel_expense\n\
        return total_payment\n\
\n\
a = Accountant("Ant")\n\
b = Sales("Bat")\n\
c = Employee("Cat")\n\
\n\
print(a.get_payment(5000,2000))\n\
print(b.get_payment(5000,1000,3000))\n\
print(c.get_payment(2500))',

5:'# create abstract class\n\
class Fruit :\n\
	def classification(self):\n\
		pass\n\
\n\
# create subclasses	\n\
class Simple(Fruit):\n\
	def classification(self):\n\
		return"Simple fruits"\n\
\n\
class Aggregate(Fruit):\n\
	def classification(self):\n\
		return  "Aggregate fruits"\n\
\n\
class Multiple(Fruit):\n\
	def classification(self):\n\
		return "Multiple fruits"\n\
\n\
# declare objects\n\
tomato = Simple()\n\
raspberry  = Aggregate()\n\
pineapple = Multiple()\n\
\n\
print(tomato.classification())\n\
print(raspberry.classification())\n\
print(pineapple.classification())',

6: 'from abc import ABC\n\
from abc import abstractmethod\n\
\n\
class Fruit(ABC):\n\
	@abstractmethod\n\
	def classification(self):\n\
		pass\n\
\n\
fruit = Fruit()\n\
\n\
# create subclasses\n\
class Simple(Fruit):\n\
	def kind_of(self):\n\
		return"Simple fruits"\n\
\n\
class Aggregate(Fruit):\n\
	def classification(self):\n\
		return  "Aggregate fruits"\n\
\n\
class Multiple(Fruit):\n\
	def classification(self):\n\
		return "Multiple fruits"\n\
\n\
tomato = Simple()\n\
raspberry  = Aggregate()\n\
pineapple = Multiple()'

} ;

	const answers = {
	1: 'ขอบเขตการใช้งาน local variable อยู่ใน function หรือ method หนึ่งเท่านั้น\n\
ในขณะที่ขอบเขตของ class attribute อยู่ใน class โดยที่ function หรือ method\n\
ใดๆ ใน class สามารถเข้าถึงได้',
	2: '__init__(self,...)',
	3: 'star_ship.fly_to_the_moon()',
	4: '<pre class="code Python">\
class Person:\n\
def __init__(self,first_name,last_name,dob):\n\
        self.first_name = first_name\n\
        self.last_name = last_name\n\
        self.date_of_birth = dob\n\	</pre>',
	5 : 'blue',
	6 : 'pink',
	7 : '<pre class="code Python">\
class Person:\n\
    def __init__(self,first_name,last_name,dob):\n\
        self.first_name = first_name\n\
        self.last_name = last_name\n\
        self.date_of_birth = dob\n\
\n\
    def print_full_name(self):\n\
        print(f"{self.first_name} {self.last_name}")\n\
\n\
    def print_date_of_birth(self):\n\
        print(f"{self.date_of_birth}")\
    </pre>',
    8 : '<pre class="code Python">\n\
class Person:\n\
    def __init__(self,first_name,last_name,dob):\n\
        self.first_name = first_name\n\
        self.last_name = last_name\n\
        self.date_of_birth = dob\n\
\n\
    def print_full_name(self):\n\
        print(f"{self.first_name} {self.last_name}")\n\
\n\
    def print_date_of_birth(self):\n\
        print(f"{self.date_of_birth}")\n\
\n\
class Male(Person):\n\
	pass\n\
\n\
class Female(Person):\n\
	pass\n\
</pre>',
	9:'<pre class="code Python">\n\
mj = Female("Mary","Jane","28th Feb. 1975")\n\
jd = Male("John","Doe","5th Sep. 1950")\n\
\n\
mj.print_full_name()\n\
mj.print_date_of_birth()\n\
jd.print_full_name()\n\
jd.print_date_of_birth()\n\
</pre>'
	};
