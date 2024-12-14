const students = [
    {
      "name": "Bob Smith",
      "id": "002",
      "age": 17,
      "grade": "11th Grade"
    },
    {
      "name": "Alice Johnson",
      "id": "003",
      "age": 16,
      "grade": "10th Grade"
    },
    {
      "name": "Charlie Brown",
      "id": "004",
      "age": 15,
      "grade": "9th Grade"
    },
    {
      "name": "David Williams",
      "id": "005",
      "age": 18,
      "grade": "12th Grade"
    }
    
]
const studentList = document.getElementById('studentList');
class Manage{
    constructor(){
        // student = {name,age,grade}
        this.students = []
    }
    getRow(s){
        return `
            <div class="col-md-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${s.name}</h5>
                        <p class="card-text">Id: ${s.id}</p>
                        <p class="card-text">Age: ${s.age}</p>
                        <p class="card-text">Grade: ${s.grade}</p>
                        <button class="btn btn-warning btn-sm edit-btn" data-id="001">Edit</button>
                        <button class="btn btn-danger btn-sm delete-btn" data-id="001">Delete</button>
                    </div>
                </div>
            </div>
        `

    }
    display(){
        studentList.innerHTML = ""
        this.students = students
        this.students.forEach(s => {
            // console.log(`${s.name}`)
            // console.log(`ID: ${s.id}`)
            // console.log(`Age: ${s.age}`)
            // console.log(`Grade: ${s.grade}`)
            // console.log("---")
            studentList.innerHTML += this.getRow(s)
            
        });
        console.log("display students");
        console.log(studentList);
        
    }
}

manage = new Manage();
manage.display();