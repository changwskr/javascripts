
#=========================================
# git guide
#=========================================
    writen by JWS

// git의 환경정보를 확인하고자 할때
git config --list

// 현재 git의 에디터를 정할때
code .
git config --global core.editor "code"
git config --global core.editor "code --wait"

// git 환경을 파일로 열고자 할때
git config --global -e

// 사용자와 이메일 정보를 작성
git config --global user.name "roian"
git config --global user.email "changwskr@gmail.com"

// 바뀐 속성을 확인하고자 할때
git config user.name
git config user.email

// 플랫폼 라인피드 속성값 셋팅
// git은 윈도우와 맥에 상관없이 관리해 준다.
git config --global core.autocrlf true  //윈도우인경우 \r\n 두개의 문자가 동시에 들어간다.
git config --global core.autocrlf input  //맥사용자인경우 \n 하나의 문자만 들어간다.

// git 명령어 형식
git 명령어 -option

// git 초기화 과정을 거치게 되면
// git 에는 기본적으로 master branch가 생성된다.
// 그리고 git에서 commit 단위를 관리하는 branch는 master 이다.
// 그리고 git을 더이상 사용하고 싶지 않다면 .git 디렉토리를 삭제하면 된다.

git init 

// git 상태
git status

// 만약 git의 명령어를 알리아스 시키는 방법
// git status 명령어를 git st로 변경
git config --global alias.st status

// git 명령어들 확인하기
git config -h



//-------------------------------------------------------------
// git basic
//-------------------------------------------------------------
git에는 세가지의 유형의 저장소가 관리된다.

일반적으로 작업하는 공간인 working directory
그리고 작업된 내용들을 버전관리하기 전에 관리하는 영역인 stating area
그리고 각 파일들의 버전정보와 파일들을 관리하는 .git directory (repository)
가 존재한다.
- git add를 사용해서 stating area로 전달
- git commit을 통해서 stating area의 내용들을 git repository로 넘어간다.
- 그리고 repository에 존재하는 파일들은 언제든지 checkout을 통해서 working dir 영역으로 온다.

checkout : [ git repository ] ===> [ working dir ]
add      : [ working dir    ] ===> [ stating dir ]
commit   : [ stating dir    ] ===> [ git repository dir ]
push     : [ local repository ] ====> [ remote repository ]
pull     : [ local repository ] <==== [ remote repository ] 


//--------------------------------
// git working directory 관리방법
git working directory는 엄격하게 두가지로 분리되어 관리된다.

untracked와 tracked 두개이다.
이 두개의 차이점은 파일이 만약 git 엔진이 tracking하고 있다면 tracked로 관리하고
그렇지 않다면 untracked로 관리된다.

그리고 tracked 관리영역에서도
unmodified 영역과 modified 영역으로 관리된다.
즉 하나의 파일이 trakced 되면서 modified 된 것은 stating area로 갈수 있지만
tracked - untracked 된 파일은 stating area로는 갈수 없다.

tracked && modified ===> staging area
tracked && unmodified ====x==> stating area


//--------------------------------------------------------------------------------------
// git 현재 파일의 상태들을 확인
git status

PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git status
On branch master   // 현재 작업은 마스터브랜치에서 작업하고 있다는 내용이다.

No commits yet     // 아직 커밋전이다.

Untracked files:   // 아직 untracked된 파일들이 4개가 존재한다.
  (use "git add <file>..." to include in what will be committed)
        a.txt
        b.txt
        c.txt
        gitDoc/

// 그래서 git add 명령어를 사용해서 untracked된 파일들을 staging에 넣어라
nothing added to commit but untracked files present (use "git add" to track)

//--------------------------------------------------------------------------------------
// staging area로 파일 넘기기
git add 파일명

PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git status
On branch master // 마스터브랜치야

No commits yet // 아직 커밋전이야

Changes to be committed: // 커밋할 준비가 된거야
  (use "git rm --cached <file>..." to unstage)
        new file:   a.txt

Untracked files: // 아직 add로 옮겨야 될 파일들이 존재해
  (use "git add <file>..." to include in what will be committed)
        b.txt
        c.txt
        gitDoc/


// git add a.txt
// a.txt 파일을 수정이후
PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git status
On branch master // 마스터브랜치야

No commits yet // 아직 커밋전이야

Changes to be committed: // 커밋가능한 파일이 하나 있네
  (use "git rm --cached <file>..." to unstage)
        new file:   a.txt

Changes not staged for commit: // 현재 작업영역에 있는 파일이 하나 수정되었네
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   a.txt

Untracked files: // 워킹디렉토리에서 아직 관리되기전의 파일들이 존재하네
  (use "git add <file>..." to include in what will be committed)
        b.txt
        c.txt
        gitDoc/

//--------------------------------------------------------------------------------------
// git add 형식
git add *.txt
git add a.txt b.txt
git add .

//--------------------------------------------------------------------------------------
// 여기서 스테이징 영역에 있는 파일들을 다시 작업영역으로 옮기고 싶다면
// git rm --chached 파일명 
git rm --cached *

PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git status
On branch master   여기는 마스터야

No commits yet     아직 커밋전이야

Changes to be committed:   현재 스테이징에 있는 파일리스트들이다
  (use "git rm --cached <file>..." to unstage)   이 파일들을 작업영역으로 옮길려면 git rm --cached 파일명 을 사용해
        new file:   a.txt
        new file:   b.txt
        new file:   c.txt
        new file:   gitDoc/git.guide.js

PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git rm --cached a.txt
rm 'a.txt'


PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   b.txt
        new file:   c.txt
        new file:   gitDoc/git.guide.js

Untracked files: // 작업영역으로 나온 파일리스트를 보여준다.
  (use "git add <file>..." to include in what will be committed)
        a.txt

//--------------------------------------------------------------------------------------
// git 레파지토리에서 관리하고 싶지 않은 파일들 처리
// 모든 파일들을 .gitignore이라는 디렉토리를 생성하여 관리하면 git은 더이상 관리하지 않는다.
*.log > .gitignore

PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> ls


    디렉터리: C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript


Mode                LastWriteTime         Length Name
----                -------------         ------ ----
d-----     2021-05-27   오후 7:40                .gitignore   //
d-----     2021-05-27   오후 7:15                gitDoc
-a----     2021-05-27   오후 7:22             28 a.txt
-a----     2021-05-27   오후 7:10             14 b.txt
-a----     2021-05-27   오후 7:10             14 c.txt

//--------------------------------------------------------------------------------------
// git status -h, git status -s 
PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git status -s
warning: unable to access '.gitignore': Permission denied
A  .gitignore/d.log
A  a.txt
A  b.txt
A  c.txt
A  d.log
A  gitDoc/git.guide.js


PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> echo aaa >> c.txt
PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git status -s    
AD .gitignore/d.log  이 파일은 삭제되었다.
A  a.txt   이 파일은 변경사항 없다.
A  b.txt
AM c.txt  이 파일은 수정되었다.
A  d.log
AM gitDoc/git.guide.js 이 파일은 수정되었다.


//--------------------------------------------------------------------------------------
// 어떤 파일이 수정되었는 지 확인할 때
git diff
PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git diff
diff --git a/.gitignore/d.log b/.gitignore/d.log
deleted file mode 100644
index 0132dd7..0000000  
diff --git a/a.txt b/a.txt
index 4a2a55e..a213429 100644
Binary files a/a.txt and b/a.txt differ
diff --git a/c.txt b/c.txt
index 1d60521..e1e61ea 100644
Binary files a/c.txt and b/c.txt differ
diff --git a/gitDoc/git.guide.js b/gitDoc/git.guide.js
index 677b19f..cf20ce5 100644
--- a/gitDoc/git.guide.js
+++ b/gitDoc/git.guide.js

--- a/c.txt   여기서 a 라는 의미는 이전 버전을 의미한다.
+++ b/c.txt   b 는 지금 현재 수정된 버전이라는 말이다.
@@ -1 +1,2 @@  이말은 아래의 텍스트 문구(hello world)에 대해서 어떻게 이해하면 되는 지 가르켜준다. - 는 이전파일을 말한다.여기서는 a/c.txt 파일을 말하고, -1이라는 의미는 이전파일의 첫번째줄을 의미한다. +1,2 라는 의미는 수정된 파일에서 첫번째줄에서 두번째줄까지 확인해라는 말이다.
   hello world
+add   위의 메시지가 add 되었네라는 말이다.

PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git diff a.txt
diff --git a/a.txt b/a.txt
index 4a2a55e..a213429 100644
Binary files a/a.txt and b/a.txt differ

PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git diff --staged
diff --git a/.gitignore/d.log b/.gitignore/d.log
new file mode 100644
index 0000000..0132dd7
Binary files /dev/null and b/.gitignore/d.log differ
diff --git a/a.txt b/a.txt

//--------------------------------------------------------------------------------------
// 글로벌로 설정된 것들을 에디팅할 때
git config --global -e

.gitconfig 파일을 수정한다.

[diff]
	tool = vscode	
[difftool "vscode"]
	cmd = code --wait --diff $LOCAL $REMOTE
  PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git difftool

  Viewing (1/4): '.gitignore/d.log'
  Launch 'vscode' [Y/n]? y  


//--------------------------------------------------------------------------------------
// git commit

PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git add .
PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git commit -m "second commit"
[master (root-commit) e91e76c] second commit
 5 files changed, 305 insertions(+)
 create mode 100644 a.txt
 create mode 100644 b.txt
 create mode 100644 c.txt
 create mode 100644 d.log
 create mode 100644 gitDoc/git.guide.js
PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> echo add >> c.txt
PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git status -s
 M c.txt
PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git add .
PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git commit -m "third commit"
[master 36b1a8d] third commit
 1 file changed, 0 insertions(+), 0 deletions(-)
PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> 


//--------------------------------------------------------------------------------------
// git log
// 이 명령을 통해서 commit 역사를 알수 있다.

PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git log
commit 36b1a8df557f98a602175ac3a598af772d5e957e (HEAD -> master)
Author: roian <changwskr@gmail.com>
Date:   Thu May 27 20:16:35 2021 +0900

    third commit

commit e91e76c03efffe273246fecda68cef9ddd7278f8
Author: roian <changwskr@gmail.com>
Date:   Thu May 27 20:15:28 2021 +0900

    second commit
PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript>

//--------------------------------------------------------------------------------------
// git commit -am "forth commit"
// 이 명령어는 현재 작업영역의 모든 파일을 스테이징에 넣고 바로 커밋한다.
PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> echo add >> c.txt
PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> git commit -am "fifth commit"
[master e06412d] fifth commit
 2 files changed, 31 insertions(+), 9 deletions(-)
PS C:\Users\05288\OneDrive\문서\I0.연구\2021-05-26 자바스크립터\learn-javascript> 
