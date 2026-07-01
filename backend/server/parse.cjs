const fs = require('fs');
const data = `1	K. Murali Krishna	10-08-2003	SNE-101	505152632616			Embedded Engineer	0+	8019801237
2	Shaik Tasmin	21-03-2004	SNE-102	248230586141			Embedded Engineer	0+	8019801238
3	Gade Usharani	17-12-2001	SNE-103	845810928612			Embedded Engineer		8019801236
4	Boppudi Jyothi	18-09-2002	SNE-104	362221921547			Embedded Engineer	A+	8019801235
5	Vangara Bhavana	13-10-2002	SNE-105	924001246548			Embedded Engineer	0+	8019801239
6	A. Keerthana	10-11-2003	SNE-115	738970183601			Embedded Engineer	B+	6300219902
7	S.V. Siva Kishore	17-12-2000	SNE-106	932500565292	KHPPK5718D		Application Engineer	0+	7330740458
8	N.L.N. Vachaspathi	15-11-2000	SNE-107	662082858370	BVLPN0955J		Application Engineer	0+	9989567881
9	Shaik Shahabaz	04-06-2000	SNE-108	290625312338	LVGPS5699D		Application Engineer	B+	7702176786
10	U.Phanindra	06-01-2002	SNE-109	882860547665	IDRPP7401J		Application Engineer	B+	8106448683
11	L. Gowtham	16-01-2002	SNE-110	309606854026	BUFPL3832D		Application Engineer	0+	8074149082
12	M. SRK Sai	27-12-2000	SNE-111	453171058441	NHWPS0568F		Application Engineer	0+	9398876730
13	A.V. Sai Jaswanth	19-04-2002	SNE-112	301625438662			Software Developer	B+	7995511792
14	Chandra Shekar Sharma	09-11-2002	SNE-113	594337138796			Software Developer	0+	9502574489
15	Alam Parwez	06-02-2003	SNE-114	859253726709	ECEPA4946K		Application Engineer	0+	7273831293
16	A. Keerthana	10-11-2003	SNE-115	738970183601			Embedded Engineer	B+	6300219902
17	P. Narendra Reddy	14-03-2004	SNE-116	480264414453	GKUPP2624F		Application Engineer		8179409878
18	V. Sai Teja	19-06-2004	SNE-117	351650983169	CRFPT7291A		Application Engineer	0+	6281303806
19	N. Rajesh	17-05-2023	SNE-119	85258043107	CWUPN0366C		Application Engineer	0+	8790416194
20	L. Ashok	07-12-2003	SNE-120	510564894585	GMHPA5261G		Application Engineer	0+	9502058916
21	B. Praveen	06-02-2003	SNE-121	773109065692	GKBPB1662L		Application Engineer	0+	7095986365
22	E. Sathwik Reddy	10-05-2004	SNE-122	544004104495	SEXPS0445L		Application Engineer	0+	7674941497
23	B. Praveen Babu	05-11-2003	SNE-123	327930699387	ERTPB3362N		Application Engineer	0+	9866524557
24	P. Teja	22-12-2002	SNE-124	721390793377	HEDPP5013L		Application Engineer	0+	6304121403
25	N. Vinayak	22-12-1999	SNE-125	759306257477	BQBPN474H		Application Engineer	0+	6000316790
34	S. Kuldeep	31-03-1993	SNE-126	419555105967	JPHPS4586C		Application Engineer	B+	9039233875
35	P. Nagaraju		Ser-110				Service Manager	B-	8374097703
36	P. Sachin		Ser-111				Asst. Service Manager	B+	9893867023
37	Vinit Kumar		Ser-112				Asst. Service Manager	AB+	9540729185
38	Remant Patel		Ser-113				Sr. Application Engineer	B+	8878802777`;
const lines = data.trim().split('\n');
const mockEmployees = lines.map(line => {
    const cols = line.split('\t');
    const name = cols[1];
    let empId = cols[3].replace('-', '');
    
    // Sometimes index gets shifted. Let's look backwards.
    let phone = cols[cols.length - 1];
    let bloodGroup = cols[cols.length - 2].replace('0+', 'O+');
    let designation = cols[cols.length - 3];
    if (!designation || designation === '') designation = cols[cols.length - 4]; // some rows have extra spaces

    let role = designation;
    if (empId === 'SNE112') {
        bloodGroup = 'B+';
        designation = 'Software Developer';
    }

    return {
        employeeId: empId,
        name: name,
        role: role,
        designation: designation,
        department: designation && designation.includes('Software') ? 'Software Development' : (designation && designation.includes('Service') ? 'Service' : 'Engineering'),
        email: name.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '') + '@sn-enviro.com',
        phone: '+91 ' + phone,
        joinDate: new Date('2023-01-01'), // Default mock
        bloodGroup: bloodGroup,
        techSkills: [],
        location: empId === 'SNE112' ? 'HYD' : 'Headquarters',
        reportingManager: 'Sarah Connor',
        bio: `${name} is a valued ${designation} at SN Enviro.`
    };
});
fs.writeFileSync('generated_seed.json', JSON.stringify(mockEmployees, null, 2));
