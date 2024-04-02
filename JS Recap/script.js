function showMenu() {
  let options = parseInt(
    prompt(
      `Xəstəxanamıza App-mizə xoş gəlmişsiniz!\n\nZəhmət olmasa icra olunmasını istədiyiniz sətrin nömrəsini qeyd edin:\n1.Xəstə əlavə et \n2.Xəstənin çıxarılışı: \n3. Xəstə siyahısına bax\n4. App-dan çıxış et`
    )
  );

  switch (options) {
    case 1:
      admitPatient();
      break;
    case 2:
      removePatient();
      break;
    case 3:
      viewPatients();
      break;
    case 4:
      alert(
        "Xəstəxana App-mizdən istifadə etdiyiniz üçün çox sağolun.Görüşənədək!"
      );
      break;
    default:
      alert("Yanlış seçim. Zəhmət olmasa yenidən daxil edin");
      showMenu();
  }
}

let patients = [];

function admitPatient() {
  let name = prompt("Xəstənin adını qeyd edin:");
  patients.push(name);
  alert(`${name} uğurla əlavə edildi.`);
  showMenu();
}

function removePatient() {
  if (patients.length === 0) {
    alert("Çıxarılacaq xəstələr yoxdur.");
  } else {
    let patientIndex = parseInt(
      prompt(
        `Çıxarılacaq xəstəni seçin:\n${patients
          .map((patient, index) => `${index + 1}. ${patient}`)
          .join("\n")}`
      )
    );
    if (
      !isNaN(patientIndex) &&
      patientIndex > 0 &&
      patientIndex <= patients.length
    ) {
      let removedPatient = patients.splice(patientIndex - 1, 1);
      alert(`${removedPatient}  evə buraxıldı`);
    } else {
      alert(
        "Yanlış məlumatlar daxil edilib.Zəhmət olmasa doğru xəstə məlumatlarınl girin"
      );
    }
  }
  showMenu();
}

function viewPatients() {
  if (patients.length === 0) {
    alert("Xəstə əlavə edilməyib.");
  } else {
    alert("Əlavə edilmiş xəstə:\n" + patients.join("\n"));
  }
  showMenu();
}

showMenu();
