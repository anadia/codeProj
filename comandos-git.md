  <div id="readme" class="Box-body readme blob instapaper_body js-code-block-container">
    <article class="markdown-body entry-content p-3 p-md-6" itemprop="text"><h2><a id="user-content-resumen-de-comandos-git" class="anchor" aria-hidden="true" href="#resumen-de-comandos-git"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Resumen de comandos Git</h2>
<p>Comandos principales para trabajar con Git de forma individual. Los
comandos relacionados con el trabajo en equipo los veremos en la
práctica 2.</p>
<p>Al final del documento se incluyen enlaces a apartados del libro
<a href="https://git-scm.com/book/en/v2" rel="nofollow"><strong>Pro Git</strong></a>. Es un libro totalmente
recomendable, deberías bajártelo y guardarlo como material de
aprendizaje y de referencia. Está disponible de forma gratuita en
múltiples versiones (PDF, eBook, HTML y mobi).</p>
<h3><a id="user-content-comandos-básicos" class="anchor" aria-hidden="true" href="#comandos-básicos"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Comandos básicos</h3>
<ul>
<li>
<p>Configurar el usuario y dirección de correo en git:</p>
<pre><code>$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
</code></pre>
</li>
<li>
<p>Inicializar git en un directorio:</p>
<pre><code>  $ cd /ruta/a/mi/directorio
  $ git config --global user.name &lt;nombre-usuario&gt;
  $ git config --global user.email &lt;email&gt;
  $ git init
  $ git add .
  $ git commit -m "Versión inicial"
</code></pre>
</li>
<li>
<p>Publicar por primera vez el repositorio local en el remoto (en GitHub):</p>
<pre><code>  $ git remote add origin https://github.com/&lt;usuario&gt;/&lt;nombre-repo&gt;.git
  $ git push -u origin master
</code></pre>
<p>El nombre del repositorio remoto será <code>origin</code> (nombre estándar
del repositorio remoto en el caso en el que sólo haya
uno). Subimos al repositorio la rama <code>master</code> (la rama por defecto
que se crea al inicializar el repositorio local).</p>
</li>
<li>
<p>Comprobar el estado del repositorio local:</p>
<pre><code>  $ git status
</code></pre>
</li>
<li>
<p>Comprobar las diferencias entre los ficheros modificados en el
directorio de trabajo y el último commit:</p>
<pre><code>  $ git diff
</code></pre>
</li>
<li>
<p>Añadir un fichero al
<a href="http://programmers.stackexchange.com/questions/119782/what-does-stage-mean-in-git" rel="nofollow"><em>stage</em></a>
(añadirlo para el próximo commit):</p>
<pre><code>  $ git add &lt;fichero o directorio&gt;
</code></pre>
<p>El área de <em>stage</em> también se llama el <em>index</em>. Es muy importante
entender su funcionamiento para trabajar con Git. El siguiente
dibujo muestra su funcionamiento:</p>
  <a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/domingogallardo/apuntes-mads/master/practicas/01-introduccion-play/imagenes/staging-area.png"><img src="https://raw.githubusercontent.com/domingogallardo/apuntes-mads/master/practicas/01-introduccion-play/imagenes/staging-area.png" width="400px" style="max-width:100%;"></a>
</li>
<li>
<p>Hacer un commit de los ficheros en el <em>stage</em>:</p>
<pre><code>  $ git commit -m "Mensaje"
</code></pre>
</li>
<li>
<p>Eliminar un fichero del <em>stage</em> (si lo hemos añadido, pero al final
decidimos no añadirlo en el siguiente commit):</p>
<pre><code>  $ git reset HEAD &lt;fichero&gt;
</code></pre>
</li>
<li>
<p>Se puede combinar en un único comando el <code>add</code> y el <code>commit</code> en
ficheros ya añadidos al control de versiones:</p>
<pre><code>  $ git commit -a -m "Mensaje"
</code></pre>
<p>Se puede abreviar como</p>
<pre><code>  $ git commit -am "Mensaje"`
</code></pre>
</li>
<li>
<p>Eliminar todos los cambios realizados en el directorio, volviendo al
último commit:</p>
<pre><code>  $ git reset --hard HEAD
  $ git clean -fd (si se ha añadido algún fichero)
</code></pre>
</li>
<li>
<p>Publicar los cambios en el repositorio remoto:</p>
<pre><code>  $ git push
</code></pre>
</li>
<li>
<p>Consultar los mensajes de los commits (toda la historia de la rama
actual). La opción <code>--oneline</code> muestra sólo la primera línea del
mensaje, la opción <code>--graph</code> muestra el grafo de dependencias y la
opción <code>--all</code>muestra el grafo completo, no sólo aquel en el que
estamos (<code>HEAD</code>).</p>
<pre><code>  $ git log [--oneline] [--graph] [--all]
</code></pre>
</li>
<li>
<p>Comprobar las diferencias entre dos commits:</p>
<pre><code>  $ git diff &lt;hash-previo&gt; &lt;hash-nuevo&gt;
</code></pre>
<p>Devuelve las cambios que se han introducido desde el commit
identificado por  y hasta el .</p>
</li>
</ul>
<h3><a id="user-content-ramas" class="anchor" aria-hidden="true" href="#ramas"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Ramas</h3>
<p>Es muy importante entender que las ramas en Git son como etiquetas
móviles. La rama en la que estamos se actualiza de posición cada vez
que hacemos un nuevo commit. Git mantiene en la referencia <code>HEAD</code> la
rama actual.</p>
<p><a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/domingogallardo/apuntes-mads/master/practicas/01-introduccion-play/imagenes/ramas.png"><img src="https://raw.githubusercontent.com/domingogallardo/apuntes-mads/master/practicas/01-introduccion-play/imagenes/ramas.png" width="500px" style="max-width:100%;"></a></p>
<ul>
<li>
<p>Crear una rama nueva:</p>
<pre><code>  $ git checkout -b nueva-rama
  M   hola.txt (si hay cambios en el espacio de trabajo se llevan a la nueva rama)
  Switched to a new branch 'nueva-rama'
</code></pre>
</li>
<li>
<p>Listar las ramas de un repositorio:</p>
<pre><code>  $ git branch
  master
  * nueva-rama
  $ git commit -a -m "Confirmamos los cambios en la nueva rama"
</code></pre>
</li>
<li>
<p>Moverse a otra rama:</p>
<pre><code>  $ git checkout master
  Switched to branch 'master'
</code></pre>
</li>
<li>
<p>Mostrar un fichero de una rama (o commit) dado:</p>
<pre><code>  $ git show &lt;commit o rama&gt;:&lt;nombre-fichero&gt;
</code></pre>
</li>
<li>
<p>Comparar dos ramas:</p>
<pre><code>  $ git diff master nueva-rama
</code></pre>
<p>El comando <code>git diff master nueva-rama</code> devuelve las diferencias
entre las ramas <code>master</code> y <code>nueva-rama</code>: las modificaciones que
resultarían de mezclar la rama <code>nueva-rama</code> en la rama <code>master</code>.</p>
</li>
<li>
<p><strong><em>Merge</em> de ramas</strong>: Mezclar la rama <code>nueva-rama</code> en la rama <code>master</code> (añade a la <code>master</code> los commits adicionales de la rama <code>nueva-rama</code>):</p>
<pre><code>  $ git checkout master
  $ git merge [--no-ff] nueva-rama -m "Mensaje de commit"
</code></pre>
<p>La opción <code>--no-ff</code> no hace un fast forward y mantiene separados
los commits de la rama en el log de commits. Es útil para revisar
la historia del repositorio.</p>
</li>
<li>
<p>Si en la rama que se mezcla y en la actual hay cambios que afectan a
las mismas líneas de un fichero, git detecta un conflicto y combina
esas líneas conservando las dos versiones y añadiendo la información
de la procedencia. Debemos resolver el conflicto: editarlos a mano y
volver a hacer add y commit.</p>
<pre><code>  $ git merge nueva-rama
  CONFLICT (content): Merge conflict in hola.txt  
  Automatic merge failed; fix conflicts and then commit the result.  
  # editar a mano el fichero con conflictos
  $ git commit -a -m "Arreglado el conflicto en el merge"
  $ git merge nueva-rama
</code></pre>
<p>El comando <code>git status</code> después de un merge nos indica qué
ficheros no se han mezclado y hay que editar manualmente.</p>
</li>
<li>
<p><strong><em>Rebase</em> de una rama</strong>. Si la rama master ha avanzado después de
separar una rama alternativa y queremos incorporar esos cambios en
la rama alternativa podemos hacer un <code>git rebase</code>:</p>
<pre><code>  $ git checkout -b experiment
  # hacemos cambios
  $ git commit -m "Cambios en experiment"
  $ git checkout master  
  # hacemos cambios  
  $ git commit -a -m "Cambios en master"  
  $ git checkout experiment
  $ git rebase master  
  First, rewinding head to replay your work on top of it...  
  Applying: Corregido bug1  
  Applying: Corregido bug2
</code></pre>
  <a target="_blank" rel="noopener noreferrer" href="https://raw.githubusercontent.com/domingogallardo/apuntes-mads/master/practicas/01-introduccion-play/imagenes/rebase.png"><img src="https://raw.githubusercontent.com/domingogallardo/apuntes-mads/master/practicas/01-introduccion-play/imagenes/rebase.png" width="600px" style="max-width:100%;"></a>
<p>El comando cambia la historia de la rama: primero la mueve al
final de la rama master (<em>rewind head</em>) y a partir de ahí aplica
los cambios propios de la rama.</p>
<p><strong>IMPORTANTE</strong>: No se debe hacer un <em>rebase</em> de commits que
existan en otros repositorios locales de compañeros. Al volver a
aplicar los commits sobre los commits rebobinados, se cambia su
número de hash (identificador) y se convierten en commits
distintos.</p>
<p>Una vez que hemos hecho el <em>rebase</em> ya podemos añadir mover la
rama <code>master</code> y tener una historia lineal:</p>
<pre><code>  $ git checkout master
  $ git merge nueva-rama
  # Borramos la rama una vez mezclada
  $ git branch -d nueva-rama
</code></pre>
</li>
<li>
<p>Igual que en el <em>merge</em>, al hacer un rebase pueden aparecer
conflictos al hacer el <em>rebase</em>, basta con modificar los ficheros
con conflictos, añadirlos y continuar el <em>rebase</em>:</p>
<pre><code>  $ git rebase master
  CONFLICT (content): Merge conflict in &lt;some-file&gt;
  # hacemos git status para comprobar donde están los conflictos
  $ git status
  # Unmerged paths:
  # (use "git reset HEAD &lt;some-file&gt;..." to unstage)
  # (use "git add/rm &lt;some-file&gt;..." as appropriate to mark resolution)
  #
  # Editamos los ficheros para corregir los conflictos
  $ git add &lt;some-file&gt;
  $ git rebase --continue
</code></pre>
<p><strong>IMPORTANTE</strong>: Es posible integrar los cambios de una rama
haciendo un <em>merge</em> o haciendo un <em>rebase</em>. Ambas estrategias son
correctas y cada una tiene sus pros y contras. Nosotros vamos a
usar ambas para aprender su funcionamiento.</p>
</li>
<li>
<p>Log en forma de grafo:</p>
<pre><code>  $ git log --graph --oneline 
</code></pre>
</li>
<li>
<p>Borrar una rama:</p>
<pre><code>  $ git branch -d nueva-rama  
  Deleted branch nueva-rama (was c241d7b)
</code></pre>
<p>Sólo podemos borrar de la forma anterior ramas en las que no
estamos y que se han mezclado con alguna otra. El comando anterior
no permite borrar ramas activas que tienen commits sin mezclar con
otras.</p>
</li>
<li>
<p>Borrar una rama descartando sus commits:</p>
<pre><code>  $ git branch -D rama
</code></pre>
</li>
<li>
<p>Subir una rama al repositorio remoto:</p>
<pre><code>  $ git push -u origin &lt;rama&gt;
</code></pre>
<p><strong>Para no tener que escribir la contraseña del repositorio remoto cada
vez</strong> puedes utilizar el siguiente comando que la guarda en una caché:</p>
<pre><code>  $ git config --global credential.helper cache.
</code></pre>
</li>
<li>
<p>Descargar una rama del repositorio remoto (origin, por ejemplo, el
repositorio remoto por defecto)</p>
<pre><code>  $ git fetch 
  $ git checkout -b &lt;rama&gt; origin/&lt;rama&gt;
</code></pre>
</li>
<li>
<p>Consultar ramas locales y conexiones repositorio remoto (origin, por ejemplo)</p>
<pre><code>  $ git remote show origin
</code></pre>
</li>
<li>
<p>Subir todas las ramas y etiquetas:</p>
<pre><code>  $ git push -u -all origin
</code></pre>
<p>Al poner la opción -u hacemos tracking del repositorio remoto y
las referencias quedan almacenadas en el fichero de configuración
.git/config. A partir de ahora sólo es necesario hacer <code>git push</code>
para subir los cambios en cualquiera de las ramas presentes.</p>
</li>
<li>
<p>Borrar una rama en repositorio remoto:</p>
<pre><code>  $ git push origin --delete &lt;branchName&gt;
</code></pre>
</li>
</ul>
<h3><a id="user-content-modificar-la-historia" class="anchor" aria-hidden="true" href="#modificar-la-historia"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Modificar la historia</h3>
<ul>
<li>
<p>Modificar el mensaje del último commit. Se abrirá un editor en el
que modificar el mensaje. También se puede escribir el mensaje a
mano:</p>
<pre><code>  $ git commit --amend [--m "Nuevo mensaje"]
</code></pre>
</li>
<li>
<p>Deshacer el último commit (sólo la acción del commit, dejando los cambios en el <em>stage</em>):</p>
<pre><code>  $ git reset --soft HEAD^
</code></pre>
</li>
<li>
<p>Descartar el último merge y volver a la situación anterior al hacer el merge:</p>
<pre><code>  $ git reset --merge ORIG_HEAD
</code></pre>
</li>
<li>
<p>Movernos atrás a un commit pasado, mirar los ficheros, crear una
nueva rama allí (o no) y volver al commit actual:</p>
<pre><code>  $ git checkout &lt;hash&gt; (o tag, por ejemplo v2.0)
  You are in 'detached HEAD' state.
  # Ahora estás en un detached HEAD
  $ git branch
  * (HEAD detached at 594b606)
  master
  $ git checkout -b v2.0.1
  Switched to a new branch 'v2.0.1'
  $ git branch
  master
  * v2.0.1
  $ git checkout master
</code></pre>
</li>
<li>
<p>Movernos atrás a un commit pasado, descartando todos los commits
realizados después (<strong>peligroso</strong>)</p>
<pre><code>  $ git reset --hard &lt;hash&gt;
</code></pre>
</li>
</ul>
<h3><a id="user-content-más-información" class="anchor" aria-hidden="true" href="#más-información"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Más información</h3>
<p>Puedes encontrar más información en los siguientes documentos:</p>
<ul>
<li><em>Pro Git</em> - <a href="https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository" rel="nofollow">Recording Changes to the Repository</a></li>
<li><em>Pro Git</em> - <a href="https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" rel="nofollow">Basic Branching and Merging</a></li>
<li><em>Pro Git</em> - <a href="https://git-scm.com/book/en/v2/Git-Branching-Rebasing" rel="nofollow">Git Branching - Rebasing</a></li>
<li>Tutorial de Atlassian - <a href="https://www.atlassian.com/git/tutorials/merging-vs-rebasing" rel="nofollow">Merging vs. Rebasing</a></li>
<li><em>Pro Git</em> - <a href="https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified" rel="nofollow">Reset Demystified</a></li>
</ul>
</article>
  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>



  </div>
</div>

    </main>
  </div>
  

  </div>

        
<div class="footer container-lg width-full p-responsive" role="contentinfo">
  <div class="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
      <li class="mr-3 mr-lg-0">&copy; 2019 GitHub, Inc.</li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mx-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
        <li class="mr-3 mr-lg-0"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3 mr-lg-0"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3 mr-lg-0"><a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" integrity="sha512-+HrX8ahxgj74CUPPmM6Z3OU9WEiCyL7ZNdFDi1qwf32rgamIx9tGkQuWb4dFkMHthTaCuRbi3x2Zu8qtC88+6A==" type="application/javascript" src="https://github.githubassets.com/assets/compat-bootstrap-f87ad7f1.js"></script>
    <script crossorigin="anonymous" integrity="sha512-5KoX4P/b8KhUNxooQhWIxRhCSnSw7EES28pOUYsNnqBMWDDUp6W7cPBV1MTAudwSwofIkpGapbXCgVTgn563Lg==" type="application/javascript" src="https://github.githubassets.com/assets/frameworks-e4aa17e0.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-0Igj5XKVaZAYxfH8dn/Vb0uoHCOGYqxJh2pXL3DHrgVOMa1ETDHd6ZMm4C+U4fKv8TiaHP7htak2hJOHwYGDoA==" type="application/javascript" src="https://github.githubassets.com/assets/github-bootstrap-d08823e5.js"></script>
    
    
    
  <div class="js-stale-session-flash flash flash-warn flash-banner" hidden
    >
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 000 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 00.01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark hx_rsm" open>
    <summary role="button" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

  <div aria-live="polite" class="js-global-screen-reader-notice sr-only"></div>

  </body>
</html>

