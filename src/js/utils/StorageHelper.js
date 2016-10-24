import * as dataTemplate from './dataTemplate'

export function storeDataTemplate(){
 let formData = dataTemplate.getDataTemplate().data;
 let layoutData = dataTemplate.getLayoutTemplate().layout;
 setItem('maxKey',0);
 setItem('maxRowID',0)
 setItem('data',JSON.stringify(formData))
 setItem('layout',JSON.stringify(layoutData))


}
export function addField(field){
  //let fieldData = dataTemplate.getFieldData(field)
  let data = JSON.parse(getItem('data'))
  let key = keyGenerator('maxKey',parseInt(getItem('maxKey')))
  let rowID = keyGenerator('maxRowID',parseInt(getItem('maxRowID')))
  let dataToStore = {
      key: key,
      layout:{
        rowID: rowID,
        col:{
          number:1,
          lg:12,
          md:12,
          sm:12,
          xs:12,
        }
      },
      metadata: field
    }
    data.fields.push(dataToStore);
    setItem('data',JSON.stringify(data));
    return key
}
export function addLayout(parentRowID){
  let data = JSON.parse(getItem('layout'))
  //let key = keyGenerator('maxKey',parseInt(getItem('maxKey')))
  let rowID = keyGenerator('maxRowID',parseInt(getItem('maxRowID')))
  let dataToStore = {
      row: {
        id : rowID,
        row:{}
      }
    }
    data.rows.push(dataToStore);
    setItem('layout',JSON.stringify(data));
    return rowID
}
export function updateField(key,FieldType,fieldName,value){
  //console.log('field' ,fieldName )
  let data = JSON.parse(getItem('data'))
  //console.log(data.fields)
  data.fields.map((field,i)=>{
    if(field.key == key){
      field.metadata[fieldName] = value
    }
  })
    setItem('data',JSON.stringify(data));
}
export function getField(key){
  let data = JSON.parse(getItem('data'))
  let fieldToReturn = ''
  data.fields.map((field,i)=>{
    if(field.key == key){
      console.log('field',field)
      fieldToReturn=field
    }
  })
  return fieldToReturn
}
function keyGenerator(field,key){
  let generatedKey = key ? key+1 : 1;
  setItem(field,generatedKey)
  return generatedKey
}
export function setItem(key,value) {
  sessionStorage.setItem(key,value)
}

export function getItem(key){
    return sessionStorage.getItem(key)
}
// export function storeQuizData(title,type,description,category,brandOwner,layout,tags){

//     let data = JSON.parse(sessionStorage.getItem('data'))
//     data.title = title;
//     data.type = type;
//     data.description = description;
//     data.category = category;
//     data.brandOwner = brandOwner;
//     data.layoutId = layout;
//     let keywords = []
//     tags.map((tag,i)=>{
//       keywords.push(tag.text);
//     })
//     data.keywords = keywords;

//    sessionStorage.setItem('data',JSON.stringify(data));
// }
// export function storeDataElement(key,value){

//     let data = JSON.parse(sessionStorage.getItem('data'));
//     if(key === 'keywords'){
//       let keywords = []
//         value.map((tag,i)=>{
//           keywords.push(tag.text);
//         })
//         data[key] = keywords;
//     } else {
//       data[key] = value;
//     }

//    sessionStorage.setItem('data',JSON.stringify(data));
// }

// export function addQuestion() {

//     let data = JSON.parse(sessionStorage.getItem('data'))
//     let questionArray = data.questions || [];
//     let qId = questionArray.length == 0 ? 1 : parseInt(getItem('maxId')) + 1
//     this.setItem('maxId',qId)
//     let question = dataTemplate.getQuestionTemplate().questionTemplate;

//     if(question)
//     question.qId = qId
//     questionArray.push(question);
//     data.questions = questionArray;
//     sessionStorage.setItem('data',JSON.stringify(data));
//     return data.questions
// }

// export function deleteQuestion(qId) {
//   let data = JSON.parse(sessionStorage.getItem('data'))
//     let questionArray = data.questions;
//     questionArray.map((question,i)=>{
//               if(question.qId == qId ){
//                   questionArray.splice(i,1);
//                   return ;
//               }
//         })
//     data.questions = questionArray;
//     sessionStorage.setItem('data',JSON.stringify(data));

//     return data.questions
// }
// export function generateMaxId(questions){
//   let maxId = 0;
//   if(questions){
//     questions.map((question,i)=>{
//       if(maxId < question.qId){
//         maxId = question.qId
//       }
//     })
//   }
//   this.setItem('maxId',maxId)
//   return maxId;
// }
// export function setItem(key,value) {
//     sessionStorage.setItem(key,value)
// }

// export function getItem(key){
//     return sessionStorage.getItem(key)
// }

// export function getQuestion(qId){
//    let questionTitle = ''
//    let questionNumber = ''
//    let imageUrl = ''
//    let data = JSON.parse(sessionStorage.getItem('data'))
//     if(data != null){
//         data.questions.map((question,i)=>{
//                         if(question.qId == qId ){
//                               questionTitle = question.title
//                               questionNumber = i+1
//                               imageUrl = question.imageUrls[0]
//                               return ;
//                         }
//                   })
//       }
//       sessionStorage.setItem('data',JSON.stringify(data))
//     return {
//       questionTitle : questionTitle,
//       questionNumber : questionNumber,
//       imageUrl : imageUrl
//     }
// }


// export function changeQuestion(qId,field,value){
//    let data = JSON.parse(sessionStorage.getItem('data'))
//       data.questions.map((question,i)=>{
//                       if(question.qId == qId ){
//                             question[field] = value
//                           return
//                       }
//                 })
//       sessionStorage.setItem('data',JSON.stringify(data))
// }

// export function changeAnswerlayout(qId,field,value){
//   // update answer layout field
//   let data = JSON.parse(sessionStorage.getItem('data'))
//   let questionData;
//   data.questions.map((question,i)=>{
//     if(question.qId == qId ){
//       questionData = question
//       return
//     }
//   })
//   questionData[field] = value

//   // if it is layout 1 (without images), remove images from answers
//   questionData.answers.forEach((element, index, array)=>{
//     element.imageUrl = null;
//   });

//   sessionStorage.setItem('data',JSON.stringify(data))
// }

// export function getAnswerlayout(qId){
//   let layout = ''
//   let answers = ''
//    let data = JSON.parse(sessionStorage.getItem('data'))
//       data.questions.map((question,i)=>{
//                       if(question.qId == qId ){
//                         layout = question.layoutId
//                         answers = question.answers
//                         return
//                       }
//                 })
//       return {
//         layout : layout,
//         answers : answers
//       }
// }
// export function changeAnswers(qId,value){
//   let answers = ''
//    let data = JSON.parse(sessionStorage.getItem('data'))
//       data.questions.map((question,i)=>{
//                       if(question.qId == qId ){
//                         question.answers = value
//                           return
//                       }
//                 })
//       sessionStorage.setItem('data',JSON.stringify(data))
// }

// export function storeImage(key,url,name){
//   if(key === 'createQuiz') {
//     let data = JSON.parse(sessionStorage.getItem('data'))
//     data.imageUrl = url;
//     data.imageName = name;
//     sessionStorage.setItem('data',JSON.stringify(data))
//   }
//   else if(key.type === 'question') {
//      let data = JSON.parse(sessionStorage.getItem('data'))
//      data.questions.map((question,i)=>{
//                       if(question.qId == key.id ){
//                         question.imageUrls[0] = url
//                         question.imageNames[0] = name
//                         return
//                       }
//                 })
//      sessionStorage.setItem('data',JSON.stringify(data))
//   }
// }
// // export function getType(){
// //   let data = JSON.parse(sessionStorage.getItem('data'));
// //   return data.type;

// // }

// export function setQuestionIdOnSave(questions){
//    let data = JSON.parse(sessionStorage.getItem('data'))
//      data.questions.map((question,i)=>{
//         questions.map((questionResponse,j)=>{
//                       if(question.qId == questionResponse.qId ){
//                         question.id = questionResponse.id
//                         return
//                       }
//                 })
//       })
//      sessionStorage.setItem('data',JSON.stringify(data))
// }

// export function updateQuizResponse(responses){
//   let data = JSON.parse(sessionStorage.getItem('data'));
//   data.custom.map((custom,index)=>{
//     if(custom.type === 'RESULT_SUMMARY'){
//        custom.values = responses
//        return
//     }
//   })
//   sessionStorage.setItem('data',JSON.stringify(data));
// }

// export function getResponse(){
//   let  data = JSON.parse(sessionStorage.getItem('data'));
//   let responses = [];
//   data && data.custom && data.custom.map((custom,index)=>{
//     if(custom.type === 'RESULT_SUMMARY'){
//        responses = custom.values;
//        return;
//     }
//   })
//   return responses
// }

// export function getResultObj(optionMarkedByQuesId){
//   let data = JSON.parse(sessionStorage.getItem('data'));
//   let nQuestionsAttempted = 0, nCorrectAnswers = 0, apResponses = [];

//   data.questions.map((ques, index)=>{
//     let markedAnsId = optionMarkedByQuesId[ques.qId]; // 1-based
//     let markedAnsIndex = markedAnsId ? markedAnsId-1 : -1;
//     if(markedAnsId){
//       nQuestionsAttempted++;
//       if(ques.answers[markedAnsIndex].correct){
//         nCorrectAnswers++;
//       }
//     }
//     apResponses.push({
//       qId: ques.id,
//       aIdx: markedAnsIndex
//     });
//   });

//   return {
//     "pId": data.id,
//     "sId":"", // session id, maybe for release 2. Will the Release 2 be in Oct?
//     "submittedAt": new Date().toISOString(),
//     "attempted": nQuestionsAttempted,
//     "correct": nCorrectAnswers,
//     "responses":apResponses
//   };
// }

// export function getPollResult(questionId){
//   let pollResult = JSON.parse(sessionStorage.getItem('pollResult'));
//   let resultForGivenQId = {}
//   pollResult.userResponses.map((response,index)=>{
//     let key =  Object.keys(response)[0]
//     if(key == questionId){
//        resultForGivenQId = response[key];
//        return ;
//     }
//   })
//    return resultForGivenQId;

// }
